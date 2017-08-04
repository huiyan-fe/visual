const steplizePoint = (point, step) => point.map(item => Math.round(item / step) * step);

export default steplizePoint;