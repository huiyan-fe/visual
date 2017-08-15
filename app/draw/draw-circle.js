
import config from '../config/config';

function DrawLine(Visual, obj) {
    const ctx = Visual.ctx;

    const basicOptions = config.ctxStyleConfig;
    Object.keys(basicOptions).forEach(key => {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

    ctx.beginPath();
    ctx.save();
    ctx.arc(obj.center[0], obj.center[1], obj.redius, 0, Math.PI * 2);
    ctx.fill();
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    // active
    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        ctx.save();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillStyle = '#fff';
        ctx.arc(obj.center[0], obj.center[1], 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}

export default DrawLine;