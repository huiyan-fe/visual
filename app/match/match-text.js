/* globals document window */

import config from '../config/config';

const debug = !true;

const textCanvas = document.createElement('canvas');
textCanvas.width = 1;
textCanvas.height = 1;
textCanvas.style.width = '1px';
textCanvas.style.height = '1px';
const textCtx = textCanvas.getContext('2d');

if (debug) {
    textCanvas.style.border = '1px solid #ccc';
    window.onload = () => {
        document.body.appendChild(textCanvas);
    };
}

const matchText = (P, object, eventType, res) => {
    textCtx.beginPath();
    if (debug) {
        textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    }

    // offset
    const padding = [10, 10];

    Object.keys(config.ctxStyleConfig).forEach(key => {
        textCtx[key] = object.options[key] || config.ctxStyleConfig[key];
    });

    let heightOffset = 0;
    let widthOffset = 0;
    switch (textCtx.textAlign) {
        case 'left':
            widthOffset = -padding[0] / 2;
            break;
        case 'center':
            widthOffset = -(object.sys.measure.width / 2) - (padding[0] / 2);
            break;
        case 'right':
            widthOffset = -object.sys.measure.width - (padding[0] / 2);
            break;
        default:
            widthOffset = -(object.sys.measure.width / 2) - (padding[0] / 2);
    }

    switch (textCtx.textBaseline) {
        case 'top':
            heightOffset = -(padding[1] / 2);
            break;
        case 'alphabetic':
            heightOffset = -object.sys.measure.height + (object.sys.measure.height - textCtx.fontSize) / 2;
            break;
        case 'bottom':
            heightOffset = -object.sys.measure.height - (padding[1] / 2);
            break;
        default:
            heightOffset = -(object.sys.measure.height / 2) - (padding[1] / 2);
    }


    textCtx.save();
    textCtx.translate(object.center[0], object.center[1]);
    if (object.options.rotate) {
        textCtx.rotate(object.options.rotate);
    }
    textCtx.rect(
        widthOffset, heightOffset,
        object.sys.measure.width + padding[0],
        object.sys.measure.height + padding[1],
    );

    if (debug) {
        textCtx.fill();
    }
    const isFit = textCtx.isPointInPath(P[0], P[1]);
    if (isFit) {
        const userSet = object.userSet;
        // const bufferSize = userSet.bufferSize;
        // mouseOverEventEnable: false,
        // clickable: true,
        if ((eventType === 'mousemove' && !userSet.mouseOverEventEnable)
            || (eventType === 'mousedown' && !userSet.clickable)) {
            // res.length = 0;
        } else {
            res.push({
                object,
                projection: P,
                length: Math.sqrt((P[0] - object.center[0]) ** 2, (P[1] - object.center[1]) ** 2),
            });
        }
    }
    textCtx.restore();
};

export default matchText;