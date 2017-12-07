import VisualObject from './object';
import steplizePoint from '../tools/steplize';
import pointsToBezierCurve from '../tools/pointToBezier';

class Curve extends VisualObject {
    constructor(Visual, pathParams = [], options) {
        super(options);
        this.Visual = Visual;
        this.id = Symbol('curve');
        // Object.assign(this.userSet, userSet);

        const path = JSON.parse(JSON.stringify(pathParams));

        const outBox = {
            xMin: Infinity,
            xMax: -Infinity,
            yMin: Infinity,
            yMax: -Infinity,
        };

        path.forEach(point => {
            outBox.xMin = Math.min(outBox.xMin, point[0]);
            outBox.xMax = Math.max(outBox.xMax, point[0]);
            outBox.yMin = Math.min(outBox.yMin, point[1]);
            outBox.yMax = Math.max(outBox.yMax, point[1]);
        });

        this.type = Visual.sys.objectTypes.curve;
        this.path = path.map(point => steplizePoint(point, this.Visual.options.grid.step));
        this.options = JSON.parse(JSON.stringify(options));
        this.sys = {
            outBox,
        };

        this.Visual.sys.objects.push(this);
        this.Visual.draw();
    }
    setPath(paths) {
        const path = JSON.parse(JSON.stringify(paths));
        this.path = path.map(point => steplizePoint(point, this.Visual.options.grid.step));
        this.Visual.draw();
    }

    getBezier() {
        return pointsToBezierCurve(this.path);
    }
}

export default Curve;