/* globals document window */

import config from '../config/config';

const debug = false;

const textCanvas = document.createElement('canvas');
textCanvas.width = 2000;
textCanvas.height = 2000;
textCanvas.style.width = '2000px';
textCanvas.style.height = '2000px';
const textCtx = textCanvas.getContext('2d');

if (debug) {
    textCanvas.style.border = '1px solid #ccc';
    window.onload = () => {
        document.body.appendChild(textCanvas);
    };
}

const matchText = (P, datas, res) => {
    const useData = datas;
    useData.isActive = null;
    textCtx.beginPath();
    if (!debug) {
        textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    }

    // offset
    const padding = [10, 10];
    const basicOptions = config.ctxBaseConfig;
    Object.assign(basicOptions, datas.options);
    Object.assign(textCtx, basicOptions);

    let heightOffset = 0;
    let widthOffset = 0;
    switch (textCtx.textAlign) {
        case 'left':
            widthOffset = padding[0] / 2;
            break;
        case 'center':
            widthOffset = -(datas.sys.measure.width / 2) - (padding[0] / 2);
            break;
        case 'right':
            widthOffset = -datas.sys.measure.width - (padding[0] / 2);
            break;
        default:
            widthOffset = -(datas.sys.measure.width / 2) - (padding[0] / 2);
    }

    // console.log(text.textBaseline)
    switch (textCtx.textBaseline) {
        case 'top':
            heightOffset = -(padding[1] / 2);
            break;
        case 'bottom':
            heightOffset = -datas.sys.measure.height - (padding[1] / 2);
            break;
        default:
            heightOffset = -(datas.sys.measure.height / 2) - (padding[1] / 2);
    }

    textCtx.rect(
        datas.center[0] + widthOffset,
        datas.center[1] + heightOffset,
        datas.sys.measure.width + padding[0],
        datas.sys.measure.height + padding[1],
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