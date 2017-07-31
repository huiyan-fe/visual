import DrawLine from './visual-draw-line';

function Draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.canvas.style.cursor = 'default';
    const objects = this.sys.objects || [];
    objects.forEach(obj => {
        switch (obj.type) {
            case this.sys.objectTypes.line:
                DrawLine(this.ctx, obj);
                break;
            default:
                console.log('unkone type', obj.type);
        }
    });
}

export default Draw;