/* globals document */

const textCanvas = document.createElement('canvas');
textCanvas.width = 1;
textCanvas.height = 1;
textCanvas.style.width = '1px';
textCanvas.style.height = '1px';
const ctx = textCanvas.getContext('2d');

const offset = 10;

const matchPolygon = (P, datas, res) => {
    const useData = datas;
    useData.isActive = null;

    ctx.beginPath();
    // object
    const outBox = datas.sys.outBox;

    if (P[0] < (outBox.xMin) || P[0] > (outBox.xMax + offset)) {
        return false;
    }
    if (P[1] < (outBox.yMin) || P[1] > (outBox.yMax + offset)) {
        return false;
    }

    datas.path.forEach((item, index) => {
        if (index === 0) {
            ctx.moveTo(item[0], item[1]);
        } else {
            ctx.lineTo(item[0], item[1]);
        }
        // get the length of P and O
        const lPO = Math.sqrt(((P[0] - item[0]) ** 2) + ((P[1] - item[1]) ** 2));
        if (lPO < offset) {
            res.push({
                type: 'point',
                index,
                data: datas,
                length: lPO,
            });
        }
    });
    // ctx.fill();
    const isFit = ctx.isPointInPath(P[0], P[1]);
    const center = [((outBox.xMax + outBox.xMin) / 2), ((outBox.yMax + outBox.yMin) / 2)];
    const length = Math.sqrt(((P[0] - center[0]) ** 2) + ((P[1] - center[1]) ** 2));
    if (isFit) {
        res.push({
            type: 'object',
            data: datas,
            length,
        });
    }
};

export default matchPolygon;