/* globals requestAnimationFrame  */
import config from '../config/config';

import DrawLine from './draw-line';
import DrawCurve from './draw-curve';
import DrawText from './draw-text';
import DrawTextGroup from './draw-textgroup';
import DrawCircle from './draw-circle';
import DrawPolygon from './draw-polygon';
import DrawArc from './draw-arc';
import DrawImage from './draw-image';

let self = null;
let drawFlag = false;

function Draw() {
    self = this;
    drawFlag = true;
}

function drawFns(obj) {
    const ctx = self.ctx;
    ctx.save();
    // copy from basicoptions
    const basicOptions = config.ctxStyleConfig;
    Object.keys(basicOptions).forEach(key => {
        ctx[key] = obj.options[key] || basicOptions[key];
    });
    //
    const options = {
        strokeRadius: 14,
        strokeStyle: 'rgba(255, 0, 0, 1)',
        fillStyle: '#f00'
    };
    switch (obj.type) {
        case self.sys.objectTypes.line:
            DrawLine(self, obj, options);
            break;
        case self.sys.objectTypes.curve:
            DrawCurve(self, obj);
            break;
        case self.sys.objectTypes.text:
            DrawText(self, obj, options);
            break;
        case self.sys.objectTypes.textGroup:
            DrawTextGroup(self, obj, options);
            break;
        case self.sys.objectTypes.circle:
            DrawCircle(self, obj, options);
            break;
        case self.sys.objectTypes.polygon:
            DrawPolygon(self, obj, options);
            break;
        case self.sys.objectTypes.arc:
            DrawArc(self, obj);
            break;
        case self.sys.objectTypes.image:
            DrawImage(self, obj);
            break;
        default:
            console.log('unkonw draw type', obj.type);
    }
    ctx.restore();
}

(function DrawDispatch() {
    if (self && drawFlag) {
        self.ctx.clearRect(0, 0, self.ctx.canvas.width, self.ctx.canvas.height);
        self.ctx.canvas.style.cursor = 'default';

        const objects = self.sys.objects || [];
        const activeObjects = [];
        objects.forEach(obj => {
            if (obj.isActive) {
                activeObjects.push(obj);
            } else {
                drawFns(obj);
            }
        });

        activeObjects.forEach(obj => {
            drawFns(obj);
        });
        drawFlag = false;
    }
    requestAnimationFrame(DrawDispatch);
}());

export default Draw;