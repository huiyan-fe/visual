/* globals */

import VisualObject from './object';
import steplizePoint from '../tools/steplize';


class Image extends VisualObject {
    constructor(Visual, image, centerParam, width, height, rotate, options, userSet) {
        super(options);
        this.Visual = Visual;
        this.id = Symbol('image');
        // this.userSet.bufferSize = 5;
        // Object.assign(this.userSet, userSet);
        const center = JSON.parse(JSON.stringify(centerParam));

        this.type = Visual.sys.objectTypes.image;
        this.image = image;
        this.center = steplizePoint(center, this.Visual.options.grid.step);
        this.width = width;
        this.height = height;
        this.rotate = rotate;
        this.options = options;

        this.Visual.sys.objects.push(this);
        this.Visual.draw();
    }

    setRadiusCenter(radius, centerParam) {
        const center = JSON.parse(JSON.stringify(centerParam));
        this.radius = radius;
        this.center = steplizePoint(center, this.Visual.options.grid.step);
        this.Visual.draw();
    }
}

export default Image;