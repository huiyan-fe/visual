/* globals document getComputedStyle */

import VisualObject from './object';
import steplizePoint from '../tools/steplize';

import config from '../config/config';

class TextGroup extends VisualObject {
    constructor(Visual, text, pathParam = [], options) {
        super(options);
        this.Visual = Visual;
        this.id = Symbol('textGroup');
        let pathParamReffer = JSON.parse(JSON.stringify(pathParam));
        if (!(pathParamReffer[0] instanceof Array)) {
            pathParamReffer = [pathParamReffer];
        }

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
        let lastPos = 0;
        let lastChar = '';
        const path = text.split('').map((char, index) => {
            if (pathParamReffer[index]) {
                lastPos = pathParamReffer[index];
                lastChar = char;
                return pathParamReffer[index];
            }
            const x = lastPos[0] + Visual.ctx.measureText(lastChar).width;
            lastPos = [x, lastPos[1]];
            lastChar = char;
            return [x, lastPos[1]];
        });
        //

        this.type = Visual.sys.objectTypes.textGroup;
        this.text = text;
        this.options = options;
        this.path = path;
        this.sys = {
            measure: {
                height,
                width,
            },
            spaces,
            outbox: [],
        };

        this.Visual.sys.objects.push(this);
        // this.Visual.sys.objects.push({
        //     id: this.id,
        //     type: Visual.sys.objectTypes.textGroup,
        //     text,
        //     options,
        //     object: this,
        //     path,
        //     sys: {
        //         measure: {
        //             height,
        //             width,
        //         },
        //         spaces,
        //         outbox: [],
        //     },
        // });
        this.Visual.draw();
    }

    setPath(paths) {
        const path = JSON.parse(JSON.stringify(paths));
        this.path = path.map(point => steplizePoint(point, this.Visual.options.grid.step));
        this.Visual.draw();
    }
}

export default TextGroup;