function DrawLine(Visual, obj) {
    const ctx = Visual.ctx;

    ctx.beginPath();
    ctx.save();
    ctx.arc(obj.center[0], obj.center[1], obj.redius, 0, Math.PI * 2);
    ctx.fill();
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    const userSet = obj.object.userSet;
    if (userSet && userSet.active) {
        if (!(obj && obj.isActive)) {
            // userSet.active = false;
            obj['isActive'] = { data: obj };
        }
    }

    // active
    if (obj.isActive) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
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