const scaleOrder = (pointsArr, scaleValue) => (
    pointsArr.map(point => [
        Math.round(point[0] * scaleValue[0]),
        Math.round(point[1] * scaleValue[1]),
    ])
);

const scaleReverse = (pointsArr, scaleValue) => (
    pointsArr.map(point => [
        Math.round(point[0] / scaleValue[0]),
        Math.round(point[1] / scaleValue[1]),
    ])
);

export { scaleOrder, scaleReverse };