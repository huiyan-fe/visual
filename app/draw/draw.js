/* globals requestAnimationFrame  */
import config from '../config/config';

import DrawLine from './draw-line';
import DrawCurve from './draw-curve';
import DrawText from './draw-text';
import DrawTextGroup from './draw-textgroup';
import DrawCircle from './draw-circle';
import DrawPolygon from './draw-polygon';

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
    switch (obj.type) {
        case self.sys.objectTypes.line:
            DrawLine(self, obj);
            break;
        case self.sys.objectTypes.curve:
            DrawCurve(self, obj);
            break;
        case self.sys.objectTypes.text:
            DrawText(self, obj);
            break;
        case self.sys.objectTypes.textGroup:
            DrawTextGroup(self, obj);
            break;
        case self.sys.objectTypes.circle:
            DrawCircle(self, obj);
            break;
        case self.sys.objectTypes.polygon:
            DrawPolygon(self, obj);
            break;
        default:
            // console.log('unkone type', obj.type);
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