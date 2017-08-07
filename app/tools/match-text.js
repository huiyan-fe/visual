/* globals document */

const textCanvas = document.createElement('canvas');
textCanvas.width = 2000;
textCanvas.height = 2000;
textCanvas.style.width = '2000px';
textCanvas.style.height = '2000px';
const textCtx = textCanvas.getContext('2d');

const matchText = (P, datas, res) => {
    const useData = datas;
    useData.isActive = null;
    // console.warn(P, datas);
    textCtx.beginPath();
    textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    textCtx.rect(
        datas.center[0] - (datas.sys.measure.width / 2),
        datas.center[1] - (datas.sys.measure.height / 2),
        datas.sys.measure.width,
        datas.sys.measure.height,
    );

    textCtx.fill();
    const isFit = textCtx.isPointInPath(P[0], P[1]);
    if (isFit) {
        res.push({
            data: datas,
            projection: P,
            length: Math.sqrt((P[0] - datas.center[0]) ** 2, (P[1] - datas.center[1]) ** 2),
        });
    }
};

export default matchText;