import config from '../config/config';
import drawLine from './draw-line';

function DrawText(Visual, obj) {
    // console.warn('a', obj.options);
    const ctx = Visual.ctx;

    // const x = obj.center[0];
    // const y = obj.center[1];

    // text
    ctx.beginPath();


    // copy from basicoptions
    ctx.save();
    const basicOptions = config.ctxStyleConfig;

    Object.keys(basicOptions).forEach(key => {
        ctx[key] = obj.options[key] || basicOptions[key];
    });


    // copy from operate configs
    const operateConfig = config.ctxOperationConfig;
    const operate = {};
    Object.keys(operateConfig).forEach(key => {
        operate[key] = obj.options[key] || operateConfig[key];
    });

    ctx.font = `${ctx.fontSize}px ${(obj.options.fontFamily || undefined)}`;
    const texts = obj.text.split('');
    obj.path.forEach((pos, index) => {
        const x = pos[0];
        const y = pos[1];
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(operate.textRotate || 0);
        ctx.fillText(texts[index], 0, 0);
        ctx.restore();
    });

    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        drawLine(Visual, obj);
    }
}

export default DrawText;