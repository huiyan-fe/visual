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
        ctx.canvas.style.cursor = 'pointer';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = strokeStyle;
        ctx.moveTo(obj.center[0] - 4, obj.center[1] - 4);
        ctx.rect(obj.center[0] - 4, obj.center[1] - 4, 8, 8);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.moveTo(obj.center[0] - 3, obj.center[1] - 3);
        ctx.rect(obj.center[0] - 3, obj.center[1] - 3, 6, 6);
        ctx.stroke();
    }
}

export default DrawImage;