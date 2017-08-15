import config from '../config/config';

function DrawLine(Visual, obj) {
    // console.log(obj);
    const ctx = Visual.ctx;
    // draw basic line
    ctx.beginPath();
    ctx.save();
    const basicOptions = config.ctxStyleConfig;
    Object.keys(basicOptions).forEach(key => {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

    const usePath = obj.path;
    let firstPoint = [];
    usePath.forEach((item, index) => {
        if (index === 0) {
            firstPoint = item;
            ctx.moveTo(item[0], item[1]);
        } else {
            ctx.lineTo(item[0], item[1]);
        }
    });
    ctx.lineTo(firstPoint[0], firstPoint[1]);

    if (obj.options.fill !== false) {
        ctx.fill();
    }
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    if (obj && obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        ctx.save();

        //

        // draw base line
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#d6d6d6';
        firstPoint = [];
        usePath.forEach((item, index) => {
            if (index === 0) {
                firstPoint = item;
                ctx.moveTo(item[0] + 1, item[1] + 1);
            } else {
                ctx.lineTo(item[0] + 1, item[1] + 1);
            }
        });
        ctx.lineTo(firstPoint[0] + 1, firstPoint[1] + 1);
        ctx.stroke();

        // draw base line
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#333';
        firstPoint = [];
        usePath.forEach((item, index) => {
            if (index === 0) {
                firstPoint = item;
                ctx.moveTo(item[0], item[1]);
            } else {
                ctx.lineTo(item[0], item[1]);
            }
        });
        ctx.lineTo(firstPoint[0], firstPoint[1]);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
        usePath.forEach(item => {
            ctx.moveTo(item[0] - 4, item[1] - 4);
            ctx.rect(item[0] - 4, item[1] - 4, 8, 8);
        });
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        usePath.forEach(item => {
            ctx.moveTo(item[0] - 3, item[1] - 3);
            ctx.rect(item[0] - 3, item[1] - 3, 6, 6);
        });
        ctx.stroke();

        //
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            const index = obj.isActive.index;
            const point = usePath[index];
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillStyle = '#fff';
            ctx.arc(point[0], point[1], 8, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }
}

export default DrawLine;