import { scaleOrder } from '../tools/scalelize';
import config from '../config/config';

function DrawText(Visual, obj) {
    // console.warn('a', obj.options);
    const ctx = Visual.ctx;

    let x = obj.center[0];
    let y = obj.center[1];

    // text
    ctx.beginPath();
    ctx.save();

    const basicOptions = config.ctxBaseConfig;
    Object.assign(basicOptions, obj.options);
    Object.assign(ctx, basicOptions);


    ctx.font = `${obj.options.fontSize}px ${obj.options.fontFamily || undefined}`;
    // ctx.textBaseline = 'middle';
    // ctx.textAlign = 'center';
    [x, y] = scaleOrder([x, y], Visual.options.grid.scale);
    ctx.fillText(obj.text, x, y);
    ctx.restore();

    if (obj.isActive) {
        // active
        const padding = [10, 10]
        const width = obj.sys.measure.width + padding[0];
        const height = obj.sys.measure.height + padding[1];

        ctx.save();
        Object.assign(ctx, basicOptions);

        let heightOffset = (height / 2);
        let widthOffset = (width / 2);
        switch (ctx.textAlign) {
            case 'left':
                widthOffset = padding[0] / 2;
                break;
            default:
                widthOffset = (width / 2);
        }

        // console.log(text.textBaseline)
        switch (ctx.textBaseline) {
            case 'top':
                heightOffset = padding[1] / 2;
                break;
            case 'bottom':
                heightOffset = height - (padding[1] / 2);
                break;
            default:
                heightOffset = (height / 2);
                console.log(ctx.textBaseline);
        }

        ctx.beginPath();
        ctx.globalAlpha = 0.6;
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillStyle = 'white';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 1;
        ctx.strokeRect(x - widthOffset, y - heightOffset, width, height);

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(x - widthOffset, y - heightOffset, width, height);
        ctx.stroke();
        ctx.restore();
    }
}

export default DrawText;