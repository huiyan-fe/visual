/* globals window document getComputedStyle */

import VLine from './object/line';
import VText from './object/text';
import Draw from './draw/draw';
import Config from './config/config';

import Event from './visual-event';

const initCanvas = Symbol('initCanvas');

class Visual {
    /**
     * Visual
     * @param {Document} dom the init document
     * @param {Object} options
     * @param {Object} options.grid
     * @param {Number} options.grid.step the step for every move defalut is 1
     * @param {Array} options.grid.scale the scale of width and height default is [1,1]
     */
    constructor(dom, options = {}) {
        this.sys = {
            objects: [],
            objectTypes: Config.objectTypes,
        };

        // config
        const basicOptions = {
            grid: {
                step: 1,
                scale: [1, 1],
            },
        };
        Object.assign(basicOptions, options);
        this.options = basicOptions;

        //
        this.dom = dom;
        this[initCanvas]();
        Event(this);
    }

    [initCanvas]() {
        const pixelRatio = (window.devicePixelRatio || 1);
        const domStyle = getComputedStyle(this.dom);
        this.width = domStyle.width;
        this.height = domStyle.height;

        this.canvas = document.createElement('canvas');
        this.canvas.width = parseInt(this.width, 10) * pixelRatio;
        this.canvas.height = parseInt(this.height, 10) * pixelRatio;
        this.canvas.style.width = this.width;
        this.canvas.style.height = this.height;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(pixelRatio, pixelRatio);

        this.dom.appendChild(this.canvas);
    }

    clean() {
        this.sys.objects = [];
        this.draw();
    }
}

Visual.prototype.line = function line(path = [], options = {}) {
    return new VLine(this, path, options);
};

Visual.prototype.text = function textfn(text, center = [], options = {}) {
    return new VText(this, text, center, options);
};

Visual.prototype.draw = Draw;

global.Visual = Visual;