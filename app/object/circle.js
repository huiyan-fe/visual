/* globals */

import VisualObject from './object';
import steplizePoint from '../tools/steplize';


class Circle extends VisualObject {
    constructor(Visual, redius, centerParam, options, userSet) {
        super(options);
        this.Visual = Visual;
        this.id = Symbol('circle');
        this.userSet.bufferSize = 5;
        Object.assign(this.userSet, userSet);
        const center = JSON.parse(JSON.stringify(centerParam));

        this.type = Visual.sys.objectTypes.circle;
        this.redius = redius;
        this.center = steplizePoint(center, this.Visual.options.grid.step);
        this.options = options;

        this.Visual.sys.objects.push(this);
        // this.Visual.sys.objects.push({
        //     id: this.id,
        //     type: Visual.sys.objectTypes.circle,
        //     redius,
        //     center: steplizePoint(center, this.Visual.options.grid.step),
        //     options,
        //     object: this,
        // });
        this.Visual.draw();
    }
}

export default Circle;