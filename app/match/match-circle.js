const matchCircle = (P, datas, eventType, res) => {
    const userSet = datas.userSet;
    const bufferSize = userSet.bufferSize;

    const lPC = Math.sqrt((P[0] - datas.center[0]) ** 2 + (P[1] - datas.center[1]) ** 2);
    if (lPC <= datas.redius + bufferSize) {
        if ((eventType === 'mousemove' && !userSet.mouseOverEventEnable) ||
            (eventType === 'mousedown' && !userSet.clickable)) {
            // res.length = 0;
        } else {
            res.push({
                innerObject: datas,
                length: lPC,
            });
        }
    }
};

export default matchCircle;