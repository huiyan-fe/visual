import pointsToBezierCurve from '../tools/pointToBezier';

function DrawLine(Visual, obj) {
    // console.log(obj);
    const ctx = Visual.ctx;
    // draw basic line

    ctx.save();

    ctx.beginPath();
    Object.keys(obj.options).forEach(key => {
        ctx[key] = obj.options[key];
    });
    const usePath = obj.path;

    const bezierPoints = pointsToBezierCurve(obj.path, ctx);
    bezierPoints.forEach((currentPoint, index) => {
        // ctx.fillRect(currentPoint.current[0] - 3, currentPoint.current[1] - 3, 6, 6);
        if (index > 0) {
            const previousPoint = bezierPoints[index - 1];
            ctx.moveTo(previousPoint.current[0], previousPoint.current[1]);
            ctx.bezierCurveTo(
                previousPoint.next[0], previousPoint.next[1],
                currentPoint.previous[0], currentPoint.previous[1],
                currentPoint.current[0], currentPoint.current[1],
            );
        }
    });
    ctx.stroke();

    ctx.restore();

    if (obj && obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        ctx.save();

        // draw base line
        ctx.lineWidth = 1;
        ctx.beginPath();
        bezierPoints.forEach((currentPoint, index) => {
            if (index > 0) {
                const previousPoint = bezierPoints[index - 1];
                ctx.moveTo(previousPoint.current[0], previousPoint.current[1]);
                ctx.bezierCurveTo(
                    previousPoint.next[0], previousPoint.next[1],
                    currentPoint.previous[0], currentPoint.previous[1],
                    currentPoint.current[0], currentPoint.current[1],
                );
            }
        });
        ctx.translate(1, 1);
        ctx.strokeStyle = '#d6d6d6';
        ctx.stroke();
        ctx.translate(-1, -1);
        ctx.strokeStyle = '#333';
        ctx.stroke();

        // draw handle
        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
        usePath.forEach(item => {
            ctx.rect(item[0] - 4, item[1] - 4, 8, 8);
        });
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        usePath.forEach(item => {
            ctx.rect(item[0] - 3, item[1] - 3, 6, 6);
        });
        ctx.stroke();

        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            if (obj.isActive.indexs) {
                obj.isActive.indexs.forEach(index => {
                    const point = usePath[index];
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
                    ctx.fillStyle = '#fff';
                    ctx.rect(point[0] - 7, point[1] - 7, 14, 14, Math.PI * 2);
                    ctx.stroke();
                });
            } else {
                const point = usePath[obj.isActive.index];
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillStyle = '#fff';
                ctx.rect(point[0] - 7, point[1] - 7, 14, 14, Math.PI * 2);
                ctx.stroke();
            }
        }
        ctx.restore();
    }
}


export default DrawLine;