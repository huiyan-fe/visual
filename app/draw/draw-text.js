import { scaleOrder } from '../tools/scalelize';

function DrawLine(Visual, obj) {
    const ctx = Visual.ctx;

    let x = obj.center[0];
    let y = obj.center[1];

    // text
    ctx.beginPath();
    ctx.save();
    Object.assign(ctx, obj.options);
    ctx.font = `${obj.options.fontSize}px ${obj.options.fontFamily || undefined}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    [x, y] = scaleOrder([x, y], Visual.options.grid.scale);
    ctx.fillText(obj.text, x, y);
    ctx.restore();

    if (obj.isActive) {
        // active
        const height = obj.sys.measure.height + 10;
        const width = obj.sys.measure.width + 10;
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha = 0.6;
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillStyle = 'white';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 1;
        ctx.strokeRect(x - (width / 2), y - (height / 2), width, height);

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(x - (width / 2), y - (height / 2), width, height);
        ctx.stroke();
        ctx.restore();
    }
}

export default DrawLine;