import Config from '../config/config';

function DrawLine(Visual, obj) {
    const ctx = Visual.ctx;

    ctx.beginPath();
    ctx.save();
    const counterclockwise = obj.counterclockwise || false; // 默认顺时针

    ctx.arc(obj.center[0], obj.center[1], obj.radius, obj.startArc, obj.endArc, counterclockwise);
    ctx.stroke();
    // ctx.fill();
    // if (obj.options.border) {
    //     ctx.stroke();
    // }
    // ctx.restore();

    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        const activeOptions = Config.ctxStyleConfig.activeOptions;
        const userActiveOptions = ctx['activeOptions'];
        Object.keys(activeOptions).forEach(configKey => {
            if (!!userActiveOptions[configKey]) {
                ctx[configKey] = userActiveOptions[configKey];
            } else {
                if (!!activeOptions[configKey]) {
                    ctx[configKey] = activeOptions[configKey];
                }
            }
        });
        const tempStrokeStyle = ctx.strokeStyle;
        // draw line
        ctx.beginPath();
        ctx.arc(obj.center[0], obj.center[1], obj.radius, obj.startArc, obj.endArc, counterclockwise);
        ctx.strokeStyle = '#000';
        ctx.stroke();
        ctx.strokeStyle = tempStrokeStyle;
        // ctx.beginPath();
        // ctx.arc(obj.center[0] - 1, obj.center[1] - 1, obj.radius, obj.startArc, obj.endArc, counterclockwise);
        // ctx.strokeStyle = '#f00';
        // ctx.stroke();

        // draw handle outer
        ctx.beginPath();
        // ctx.lineWidth = 1;
        ctx.strokeStyle = '#d6d6d6';
        ctx.stroke();
        [obj.sys.startPoint, obj.sys.endPoint, obj.sys.centerPoint].forEach(item => {
            ctx.rect(item[0] - 4, item[1] - 4, 8, 8);
        });
        ctx.stroke();
        // draw handle inner
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        [obj.sys.startPoint, obj.sys.endPoint, obj.sys.centerPoint].forEach(item => {
            ctx.rect(item[0] - 3, item[1] - 3, 6, 6);
        });
        ctx.stroke();
        ctx.strokeStyle = tempStrokeStyle;

        // if active is handle point
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            const point = obj.sys[`${obj.isActive.subtype}Point`];
            ctx.beginPath();
            ctx.rect(point[0] - 6, point[1] - 6, 12, 12, Math.PI * 2);
            ctx.stroke();
        }

        // draw the arc center point
        ctx.stroke();
        ctx.beginPath();
        // ctx.strokeStyle = '#333';
        ctx.arc(obj.center[0], obj.center[1], 3, 0, Math.PI * 2, counterclockwise);
        ctx.stroke();
    }
}

export default DrawLine;