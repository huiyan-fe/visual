function boundaryLize(points, boundary) {
    // console.log(boundary)
    let deficitXmin = 0;
    let deficitYmin = 0;

    let deficitXmax = 0;
    let deficitYmax = 0;

    points.forEach(point => {
        deficitXmin = Math.min(deficitXmin, boundary[0] - point[0]);
        deficitYmin = Math.min(deficitYmin, boundary[1] - point[1]);
        deficitXmax = Math.min(point[0], deficitXmax);
        deficitYmax = Math.min(point[1], deficitYmax);
    });

    // console.log(deficitXmax)

    const deficitX = deficitXmax < deficitXmin ? -deficitXmax : deficitXmin;
    const deficitY = deficitYmax < deficitYmin ? -deficitYmax : deficitYmin;

    return points.map(point => [point[0] + deficitX, point[1] + deficitY]);
}

export default boundaryLize;