import VisualObject from './object';
import steplizePoint from '../tools/steplize';

class Polygon extends VisualObject {
    constructor(Visual, pathParams = [], options) {
        super();
        this.Visual = Visual;
        this.id = Symbol('polygon');

        const path = JSON.parse(JSON.stringify(pathParams));

        this.Visual.sys.objects.push({
            id: this.id,
            type: Visual.sys.objectTypes.polygon,
            path: path.map(point => steplizePoint(point, this.Visual.options.grid.step)),
            options: JSON.parse(JSON.stringify(options)),
            object: this,
        });
        this.Visual.draw();
    }
}

export default Polygon;