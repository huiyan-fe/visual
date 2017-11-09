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

    Object.keys(obj.options).forEach(key => {
        ctx[key] = obj.options[key];
    });
    const usePath = obj.path;
    usePath.forEach((item, index) => {
        if (index === 0) {
            ctx.moveTo(item[0], item[1]);
        } else {
            ctx.lineTo(item[0], item[1]);
        }
    });
    ctx.stroke();
    ctx.restore();

    // const userSet = obj.object.userSet;
    // if (userSet && userSet.active) {
    //     if (!(obj && obj.isActive)) {
    //         // userSet.active = false;
    //         console.log('active:')
    //         console.log(obj)
    //         obj['isActive'] = { data: obj };
    //     }
    // }

    if (obj && obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        ctx.save();
        // draw base line
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
        usePath.forEach((item, index) => {
            if (index === 0) {
                ctx.moveTo(item[0] + 1, item[1] + 1);
            } else {
                ctx.lineTo(item[0] + 1, item[1] + 1);
            }
        });
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
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
        ctx.strokeStyle = '#d6d6d6';
        usePath.forEach(item => {
            ctx.rect(item[0] - 4, item[1] - 4, 8, 8);
        });
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        usePath.forEach(item => {
            ctx.rect(item[0] - 3, item[1] - 3, 6, 6);
        });
        ctx.stroke();

        //
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            // console.log('line active');
            const index = obj.isActive.index;
            const point = usePath[index];
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillStyle = '#fff';
            ctx.rect(point[0] - 6, point[1] - 6, 12, 12, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }
}

export default DrawLine;