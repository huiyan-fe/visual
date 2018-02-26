function DrawImage(Visual, obj, options) {
    const ctx = Visual.ctx;

    ctx.beginPath();
    ctx.save();

    const imgcenter = obj.center;
    const image = obj.image;
    const sx = -(obj.width / 2);
    const sy = -(obj.height / 2);
    const angel = (-obj.rotate * Math.PI / 180) || 0;
    ctx.translate(imgcenter[0], imgcenter[1]);
    ctx.rotate(angel);
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
        ctx.save();
        ctx.translate(imgcenter[0], imgcenter[1]);
        ctx.rotate(angel);

        ctx.strokeStyle = strokeStyle;

        ctx.moveTo(-width / 2 - 2, -height / 2 - 2);
        ctx.rect(-width / 2 - 2, -height / 2 - 2, width + 4, height + 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.moveTo(-width / 2, -height / 2);
        ctx.rect(-width / 2, -height / 2, width, height);
        ctx.stroke();

        ctx.restore();
    }
}

export default DrawImage;