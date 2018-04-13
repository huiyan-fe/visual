const isArcInRange = (initArc, startArc, endArc, counterclockwise) => {
    let flag = false;
    let arc = initArc;
    if (arc > 2 * Math.PI) {
        arc = arc % (Math.PI * 2);
    }
    if (arc < 0) {
        arc = arc % (Math.PI * 2) + (2 * Math.PI);
    }
    let start = startArc;
    let end = endArc;
    let overArc = null;
    if (counterclockwise) {
        start = endArc;
        end = startArc + 2 * Math.PI;
        overArc = arc + 2 * Math.PI;
    }
    if (
        (arc < end && arc > start) ||
        (overArc < end && overArc > start)
    ) {
        flag = true;
    }
    return flag;
}

const isOverBound = (newCenter, radius, startArc, endArc, counterclockwise, bound) => {
    const center = newCenter; // item.center;
    let overBoundFlag = false;
    // 起点终点目标位置
    const buffer = 0;
    const d1x = center[0] + Math.cos(startArc);
    const d1y = center[1] + Math.sin(startArc);
    const d2x = center[0] + Math.cos(endArc);
    const d2y = center[1] + Math.sin(endArc);
    // 判断是否超出canvas边界
    let overBoundAxis = '';
    if (d1y <= (0 - buffer) || d1x <= (0 - buffer) || d2x <= (0 - buffer) || d2y <= (0 - buffer) ||
        d1y >= (buffer + bound[1]) || d1x >= (buffer + bound[0]) || d2x >= (buffer + bound[0]) || d2y >= (buffer + bound[1])
    ) {
        overBoundFlag = true;
    } else {
        // 计算x轴只用cos，y轴用sin
        let arc1 = null;
        let arc2 = null;
        if (center[0] - radius <= 0) {
            arc1 = Math.acos(-center[0] / radius);
            arc2 = -arc1;
            overBoundAxis = 'x';
        } else if (center[1] - radius < 0) {
            arc1 = Math.asin(-center[1] / radius);
            arc2 = -(Math.PI + arc1);
            overBoundAxis = 'y';
        } else if (center[0] + radius > bound[0]) {
            arc1 = Math.acos((bound[0] - center[0]) / radius);
            arc2 = -arc1;
            overBoundAxis = 'x';
        } else if (center[1] + radius > bound[1]) {
            arc1 = Math.asin((bound[1] - center[1]) / radius);
            arc2 = -(Math.PI + arc1);
            overBoundAxis = 'y';
        }
        if (arc1 && arc2) {
            console.log('isArcInRange', arc1, arc2, '||', startArc, endArc, counterclockwise)
            const flag1 = isArcInRange(arc1, startArc, endArc, counterclockwise);
            const flag2 = isArcInRange(arc2, startArc, endArc, counterclockwise);
            console.log('==', flag1, flag2);
            overBoundFlag = flag1 || flag2;
        }
    }
    if (!overBoundFlag) {
        overBoundAxis = '';
    }
    return {
        flag: overBoundFlag,
        axis: overBoundAxis
    };
}

export default {
    isArcInRange: isArcInRange,
    isOverBound: isOverBound
};