/* globals document getComputedStyle */

import steplizePoint from '../tools/steplize';

class Text {
    constructor(Visual, text, center = [], options) {
        this.Visual = Visual;
        this.id = Symbol('text');

        const basicOptions = {
            fontSize: 12,
        };
        Object.assign(basicOptions, options);

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
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = `${basicOptions.fontSize}px ${basicOptions.fontFamily || undefined}`;
        const width = Visual.ctx.measureText(text).width;
        //

        this.Visual.sys.objects.push({
            id: this.id,
            type: Visual.sys.objectTypes.text,
            text,
            center: steplizePoint(center, this.Visual.options.grid.step),
            options: basicOptions,
            sys: {
                measure: {
                    height,
                    width,
                },
            },
        });
        this.Visual.draw();
    }

    remove() {
        const objects = this.Visual.sys.objects;
        this.Visual.sys.objects = objects.filter(item => item.id !== this.id);
        this.Visual.draw();
    }

}

export default Text;