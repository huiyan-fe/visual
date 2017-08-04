/* globals window document getComputedStyle */

import VLine from './visual-line';
import vText from './visual-text';
import Draw from './visual-draw';

import Event from './visual-event';

const initCanvas = Symbol('initCanvas');

class Visual {
    /**
     * Visual
     * @param {Document} dom the init document
     * @param {Object} options
     * @param {Object} options.grid
     * @param {Object} options.grid.step the step for every move
     */
    constructor(dom, options = {}) {
        this.sys = {
            objects: [],
            objectTypes: {
                line: Symbol('line'),
                text: Symbol('text'),
            },
        };

        // config
        const basicOptions = {
            grid: {
                step: 1,
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

Visual.prototype.text = vText;

Visual.prototype.draw = Draw;

global.Visual = Visual;