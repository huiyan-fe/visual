import pointsToBezierCurve from '../tools/pointToBezier';

/* globals document */
const textCanvas = document.createElement('canvas');
textCanvas.width = 1;
textCanvas.height = 1;
textCanvas.style.width = '1px';
textCanvas.style.height = '1px';
const ctx = textCanvas.getContext('2d');

const matchPolygon = (P, object, eventType, res) => {

    const userSet = object.userSet;
    const bufferSize = userSet.bufferSize;
    ctx.beginPath();
    // object
    const outBox = object.sys.outBox;

    if (P[0] < (outBox.xMin - bufferSize) || P[0] > (outBox.xMax + bufferSize)) {
        return false;
    }
    if (P[1] < (outBox.yMin - bufferSize) || P[1] > (outBox.yMax + bufferSize)) {
        return false;
    }
    if ((eventType === 'mousemove' && !userSet.mouseOverEventEnable) ||
        (eventType === 'mousedown' && !userSet.clickable)) {
        // res.length = 0;
    } else {
        //
        const bezierPoints = pointsToBezierCurve(object.path, ctx);
        ctx.lineWidth = (object.options.lineWidth || 0) + bufferSize;
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

            // get the length of P and O
            const lPO = Math.sqrt(((P[0] - currentPoint.current[0]) ** 2) + ((P[1] - currentPoint.current[1]) ** 2));
            if (lPO < bufferSize && object.userSet.pointEditable) {
                // pointEditable: when pointEditable is true, we push the active point to res
                res.push({
                    type: 'point',
                    index,
                    object,
                    length: lPO,
                });
            }
        });
        //

        const isFit = ctx.isPointInStroke(P[0], P[1]);
        const center = [((outBox.xMax + outBox.xMin) / 2), ((outBox.yMax + outBox.yMin) / 2)];
        const length = Math.sqrt(((P[0] - center[0]) ** 2) + ((P[1] - center[1]) ** 2));
        if (isFit) {
            res.push({
                type: 'object',
                object,
                length,
            });
        }
    }

    return res;
};

export default matchPolygon;