// import pointsToBezierCurve from '../tools/pointToBezier';

/* globals document */
const textCanvas = document.createElement('canvas');
textCanvas.width = 1;
textCanvas.height = 1;
textCanvas.style.width = '1px';
textCanvas.style.height = '1px';
const ctx = textCanvas.getContext('2d');

const matchPolygon = (P, object, eventType, res) => {
    const outBox = object.sys.outBox;
    const userSet = object.userSet;
    const bufferSize = userSet.bufferSize;
    if (P[0] < (outBox.xMin - bufferSize) || P[0] > (outBox.xMax + bufferSize)) {
        return false;
    }
    if (P[1] < (outBox.yMin - bufferSize) || P[1] > (outBox.yMax + bufferSize)) {
        return false;
    }
    ctx.beginPath();
    if ((eventType === 'mousemove' && !userSet.mouseOverEventEnable) ||
        (eventType === 'mousedown' && !userSet.clickable)) {
        // res.length = 0;
    } else {
        // const bezierPoints = pointsToBezierCurve(object.path, ctx);
        [object.sys.startPoint, object.sys.endPoint, object.sys.centerPoint].forEach(point => {
            const lPO = Math.sqrt(((P[0] - point[0]) ** 2) + ((P[1] - point[1]) ** 2));
            if (lPO < bufferSize && object.userSet.pointEditable) {
                // pointEditable: when pointEditable is true, we push the active point to res
                let subtype = 'center';
                if (object.sys.startPoint === point) {
                    subtype = 'start';
                } else if (object.sys.endPoint === point) {
                    subtype = 'end';
                }
                res.push({
                    type: 'point',
                    subtype,
                    object,
                    point,
                    length: lPO,
                });
            }
        });

        ctx.lineWidth = (object.options.lineWidth || 0) + bufferSize;
        ctx.beginPath();
        ctx.arc(object.center[0], object.center[1], object.radius, 0, Math.PI * 2);
        ctx.stroke();

        const isFit = ctx.isPointInPath(P[0], P[1]);
        // console.log('match arc isFit:', isFit, P, object);
        if (isFit) {
            res.push({
                type: 'object',
                object,
                length: Math.sqrt(
                    ((P[0] - object.center[0]) ** 2) +
                    ((P[1] - object.center[1]) ** 2),
                ),
            });
        }
    }

    return res;
};

export default matchPolygon;