import config from '../config/config';

function DrawText(Visual, obj) {
    // console.warn('a', obj.options);
    const ctx = Visual.ctx;

    const x = obj.center[0];
    const y = obj.center[1];

    // text
    ctx.beginPath();
    ctx.save();
    // copy from operate configs
    const operateConfig = config.ctxOperationConfig;
    const operate = {};
    Object.keys(operateConfig).forEach(key => {
        operate[key] = obj.options[key] || operateConfig[key];
    });

    ctx.font = `${ctx.fontSize}px ${(obj.options.fontFamily || undefined)}`;
    ctx.translate(x, y);
    if (operate.textRotate || operate.splitText) {
        // console.log(operate.textRotate);
        obj.text.split('').forEach((chart, index) => {
            ctx.save();
            ctx.rotate(operate.textRotate);
            ctx.fillText(chart, 0, 0);
            ctx.restore();
            const destenct = obj.sys.spaces[index];
            ctx.translate(destenct * Math.cos(operate.rotate), destenct * Math.sin(operate.rotate));
        });
    } else {
        ctx.rotate(operate.rotate);
        ctx.fillText(obj.text, 0, 0);
    }
    ctx.restore();

    const userSet = obj.userSet;
    if (userSet && userSet.active) {
        if (!(obj && obj.isActive)) {
            // userSet.active = false;
            obj['isActive'] = { data: obj };
        }
    }
    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        // active
        const padding = [10, 10];
        const width = obj.sys.measure.width + padding[0];
        const height = obj.sys.measure.height + padding[1];

        ctx.save();
        let heightOffset = (height / 2);
        let widthOffset = (width / 2);
        // console.log(ctx.textAlign);
        switch (ctx.textAlign) {
            case 'left':
                widthOffset = padding[0] / 2;
                break;
            case 'center':
                widthOffset = (width / 2);
                break;
            case 'right':
                widthOffset = width - (padding[0] / 2);
                break;
            default:
                widthOffset = (width / 2);
        }

        switch (ctx.textBaseline) {
            case 'top':
                heightOffset = padding[1] / 2;
                break;
            case 'alphabetic':
                heightOffset = (height / 2) + ((height - ctx.fontSize) / 2) - (padding[1] / 2);
                break;
            case 'bottom':
                heightOffset = height - (padding[1] / 2);
                break;
            default:
                heightOffset = (height / 2);
        }


        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.translate(x, y);
        ctx.rotate(operate.rotate);
        ctx.strokeStyle = '#999';
        ctx.fillStyle = 'white';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 1;
        ctx.strokeRect(-widthOffset, -heightOffset, width, height);
        ctx.restore();

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(operate.rotate);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
        ctx.moveTo(-4, -4);
        ctx.rect(-4, -4, 8, 8);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.moveTo(-3, -3);
        ctx.rect(-3, -3, 6, 6);
        ctx.stroke();
        ctx.restore();
    }
}

export default DrawText;