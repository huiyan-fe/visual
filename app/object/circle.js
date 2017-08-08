/* globals */

import VisualObject from './object';
import steplizePoint from '../tools/steplize';


class Circle extends VisualObject {
    constructor(Visual, redius, centerParam, options) {
        super();
        this.Visual = Visual;
        this.id = Symbol('circle');

        const center = JSON.parse(JSON.stringify(centerParam));

        this.Visual.sys.objects.push({
            id: this.id,
            type: Visual.sys.objectTypes.circle,
            redius,
            center: steplizePoint(center, this.Visual.options.grid.step),
            options,
            object: this,
        });
        this.Visual.draw();
    }
}

export default Circle;