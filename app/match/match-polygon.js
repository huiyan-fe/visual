/* globals document */

const textCanvas = document.createElement('canvas');
textCanvas.width = 2000;
textCanvas.height = 2000;
textCanvas.style.width = '2000px';
textCanvas.style.height = '2000px';
const ctx = textCanvas.getContext('2d');


const matchPolygon = (P, datas, res) => {
    const useData = datas;
    useData.isActive = null;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // object

    const bound = {
        xMin: Infinity,
        xMax: -Infinity,
        yMin: Infinity,
        yMax: -Infinity,
    };

    datas.path.forEach((item, index) => {
        bound.xMin = Math.min(item[0], bound.xMin);
        bound.xMax = Math.max(item[0], bound.xMax);
        bound.yMin = Math.min(item[1], bound.yMin);
        bound.yMax = Math.max(item[1], bound.yMax);
        if (index === 0) {
            ctx.moveTo(item[0], item[1]);
        } else {
            ctx.lineTo(item[0], item[1]);
        }
        // get the length of P and O
        const lPO = Math.sqrt(((P[0] - item[0]) ** 2) + ((P[1] - item[1]) ** 2));
        if (lPO < 10) {
            res.push({
                type: 'point',
                index,
                data: datas,
                length: lPO,
            });
        }
    });
    ctx.fill();
    const isFit = ctx.isPointInPath(P[0], P[1]);
    const center = [((bound.xMax + bound.xMin) / 2), ((bound.yMax + bound.yMin) / 2)];
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