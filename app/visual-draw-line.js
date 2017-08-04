import { scaleOrder } from './tools/scalelize';

function DrawLine(Visual, obj) {
    // console.log(obj);
    const ctx = Visual.ctx;
    // draw basic line
    ctx.beginPath();
    ctx.save();
    ctx.lineJoin = 'round';
    Object.keys(obj.options).forEach(key => {
        ctx[key] = obj.options[key];
    });
    const usePath = scaleOrder(obj.path, Visual.options.grid.scale);
    usePath.forEach((item, index) => {
        if (index === 0) {
            ctx.moveTo(item[0], item[1]);
        } else {
            ctx.lineTo(item[0], item[1]);
        }
    });
    ctx.lineWidth = 8 * Visual.options.grid.scale[0];
    ctx.stroke();
    ctx.restore();

    if (obj && obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        // console.log(obj.isActive)
        ctx.save();
        // draw base line
        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        usePath.forEach((item, index) => {
            if (index === 0) {
                ctx.moveTo(item[0], item[1]);
            } else {
                ctx.lineTo(item[0], item[1]);
            }
        });
        ctx.stroke();

        // draw handle
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.lineWidth = 2;
        usePath.forEach(item => {
            ctx.moveTo(item[0] + 4, item[1]);
            ctx.arc(item[0], item[1], 4, 0, Math.PI * 2);
        });
        ctx.fill();
        ctx.stroke();

        //
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            const index = obj.isActive.index;
            const point = usePath[index];

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillStyle = '#fff';
            ctx.arc(point[0], point[1], 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#fff';
            ctx.fillStyle = '#3385ff';
            ctx.arc(point[0], point[1], 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }
}

export default DrawLine;