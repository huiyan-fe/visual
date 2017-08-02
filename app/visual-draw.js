/* globals requestAnimationFrame  */

import DrawLine from './visual-draw-line';

let self = null;
let drawFlat = false;

function Draw() {
    self = this;
    drawFlat = true;
}

(function DrawDispatch() {
    if (self && drawFlat) {
        self.ctx.clearRect(0, 0, self.ctx.canvas.width, self.ctx.canvas.height);
        self.ctx.canvas.style.cursor = 'default';

        const objects = self.sys.objects || [];
        objects.forEach(obj => {
            switch (obj.type) {
                case self.sys.objectTypes.line:
                    DrawLine(self.ctx, obj);
                    break;
                case self.sys.objectTypes.text:
                    console.log(self.ctx);
                    // DrawText(self.ctx, obj);
                    break;
                default:
                    console.log('unkone type', obj.type);
            }
        });
        drawFlat = false;
    }
    requestAnimationFrame(DrawDispatch);
}());

export default Draw;