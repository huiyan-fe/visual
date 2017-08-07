const scaleOrder = (pointsArr = [], scaleValue) => {
    if (pointsArr[0] instanceof Array) {
        return pointsArr.map(point => [
            Math.round(point[0] * scaleValue[0]),
            Math.round(point[1] * scaleValue[1]),
        ]);
    }
    return [
        Math.round(pointsArr[0] * scaleValue[0]),
        Math.round(pointsArr[1] * scaleValue[1]),
    ];
};

const scaleReverse = (pointsArr = [], scaleValue) => {
    if (pointsArr[0] instanceof Array) {
        return pointsArr.map(point => [
            Math.round(point[0] / scaleValue[0]),
            Math.round(point[1] / scaleValue[1]),
        ]);
    }
    return [
        Math.round(pointsArr[0] / scaleValue[0]),
        Math.round(pointsArr[1] / scaleValue[1]),
    ];
};

export { scaleOrder, scaleReverse };