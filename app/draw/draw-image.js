function DrawImage(Visual, obj, options) {
    const ctx = Visual.ctx;

    ctx.beginPath();
    ctx.save();

    const imgcenter = obj.center;
    const image = obj.image;
    const sx = imgcenter[0] - (obj.width / 2);
    const sy = imgcenter[1] - (obj.height / 2);
    ctx.drawImage(image, sx, sy, obj.width, obj.height);
    ctx.fill();
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    let strokeRadius = 14;
    let strokeStyle = 'rgba(255, 0, 0, 1)';
    let fillStyle = '#f00';
    if (options) {
        if (options.strokeRadius) {
            strokeRadius = options.strokeRadius;
        } else if (options.strokeStyle) {
            strokeStyle = options.strokeStyle;
        } else if (options.fillStyle) {
            fillStyle = options.fillStyle;
        }
    }
    // const fillStyle = options.fillStyle || '#f00';
    // active
    if (obj.isActive) {
        let width = obj.width;
        let height = obj.height;
        ctx.canvas.style.cursor = 'pointer';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.strokeStyle = strokeStyle;
        ctx.moveTo(obj.center[0] - width / 2, obj.center[1] - height / 2);
        ctx.rect(obj.center[0] - width / 2, obj.center[1] - height / 2, width, height);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.moveTo(obj.center[0] - width / 2 + 2, obj.center[1] - height / 2 + 2);
        ctx.rect(obj.center[0] - width / 2 + 2, obj.center[1] - height / 2 + 2, width - 4, height - 4);
        ctx.stroke();
    }
}

export default DrawImage;