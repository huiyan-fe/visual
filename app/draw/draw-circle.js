function DrawLine(Visual, obj, options) {
    const ctx = Visual.ctx;

    ctx.beginPath();
    ctx.save();
    ctx.arc(obj.center[0], obj.center[1], obj.radius, 0, Math.PI * 2);
    ctx.fill();
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    const strokeRadius = options.strokeRadius || 14;
    const strokeStyle = options.strokeStyle || 'rgba(255, 0, 0, 1)';
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

export default DrawLine;