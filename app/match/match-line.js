const matchLine = (P, datas, eventType, res) => {
    const useData = datas;
    useData.isActive = null;
    datas.path.forEach((data, index) => {
        if (index !== 0) {
            const A = datas.path[index - 1];
            const B = datas.path[index];
            const vAP = [P[0] - A[0], P[1] - A[1]];
            const lAP = Math.sqrt((vAP[0] ** 2) + (vAP[1] ** 2));
            const vAB = [B[0] - A[0], B[1] - A[1]];
            const lAB = Math.sqrt((vAB[0] ** 2) + (vAB[1] ** 2));
            const vPB = [B[0] - P[0], B[1] - P[1]];
            const lPB = Math.sqrt((vPB[0] ** 2) + (vPB[1] ** 2));

            const cAPAB = (vAP[0] * vAB[0]) + (vAP[1] * vAB[1]);
            const lAPAB = lAP * lAB;
            const rPAB = Math.acos(cAPAB / lAPAB);

            const cABPB = (vAB[0] * vPB[0]) + (vAB[1] * vPB[1]);
            const lABPB = lAB * Math.sqrt((vPB[0] ** 2) + (vPB[1] ** 2));
            const rPBA = Math.acos(cABPB / lABPB);

            const userSet = datas.object.userSet;
            const bufferSize = userSet.bufferSize;
            // mouseOverEventEnable: false,
            // clickable: true,
            if ((eventType === 'mousemove' && !userSet.mouseOverEventEnable) ||
                (eventType === 'mousedown' && !userSet.clickable)) {
                // res.length = 0;
            } else {
                if ((lPB < bufferSize || lAP < bufferSize) && datas.object.userSet.pointEditable) {
                    // pointEditable: when pointEditable is true, we push the active point to res
                    res.push({
                        type: 'point',
                        data: datas,
                        projection: lPB < lAP ? B : A,
                        length: lPB < lAP ? lPB : lAP,
                        index: lPB < lAP ? index : (index - 1),
                    });
                } else if (rPAB < Math.PI / 2 && rPBA < Math.PI / 2) {
                    const lAO = Math.cos(rPAB) * lAP;
                    const pAOAB = lAO / lAB;
                    const lPO = Math.sin(rPAB) * lAP;
                    const O = [A[0] + (vAB[0] * pAOAB), A[1] + (vAB[1] * pAOAB)];
                    if (lPO < bufferSize) {
                        res.push({
                            type: 'object',
                            data: datas,
                            projection: O,
                            length: lPO,
                        });
                    }
                }
                if (res.length > 0) {}
            }
        }
    });
};

export default matchLine;