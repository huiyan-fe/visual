/* globals document getComputedStyle */

import VisualObject from './object';
import steplizePoint from '../tools/steplize';

import config from '../config/config';

class Text extends VisualObject {
    constructor(Visual, text, centerParam = [], options, userSet) {
        super(options);
        this.Visual = Visual;
        this.id = Symbol('text');
        Object.assign(this.userSet, userSet);
        const center = JSON.parse(JSON.stringify(centerParam));

        const basicOptions = {};
        Object.keys(config.ctxStyleConfig).forEach(key => {
            basicOptions[key] = options[key] || config.ctxStyleConfig[key];
        });


        const span = document.createElement('span');
        span.innerHTML = text;
        span.style.fontSize = `${basicOptions.fontSize}px`;
        span.style.fontFamily = basicOptions.fontFamily;
        basicOptions.fontFamily = getComputedStyle(span).fontFamily;
        document.body.appendChild(span);
        const height = span.offsetHeight;
        document.body.removeChild(span);

        //
        const ctx = Visual.ctx;
        ctx.font = `${basicOptions.fontSize}px ${basicOptions.fontFamily || undefined}`;
        const width = Visual.ctx.measureText(text).width;
        const spaces = text.split('').map(char => Visual.ctx.measureText(char).width);
        //

        this.Visual.sys.objects.push({
            id: this.id,
            type: Visual.sys.objectTypes.text,
            text,
            center: steplizePoint(center, this.Visual.options.grid.step),
            options,
            object: this,
            sys: {
                measure: {
                    height,
                    width,
                },
                spaces,
                outbox: [],
            },
        });
        this.Visual.draw();
    }
}

export default Text;