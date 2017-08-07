/* globals document getComputedStyle */

import steplizePoint from '../tools/steplize';

class Text {
    constructor(Visual, text, centerParam = [], options) {
        this.Visual = Visual;
        this.id = Symbol('text');

        const center = JSON.parse(JSON.stringify(centerParam));

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
            object: this,
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

    on(type, fn) {
        this.listens = this.listens || {};
        this.listens[type] = fn;
    }

    unbind(type, fn) {
        this.listens = this.listens || {};
        this.listens[type] = this.listens[type] || [];
        this.listens[type].filter(fns => fns !== fn);
    }

    emit(type, data) {
        this.listens = this.listens || {};
        if (this.listens[type]) {
            this.listens[type](data);
        }
    }

}

export default Text;