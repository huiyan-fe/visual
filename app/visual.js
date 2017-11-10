/* globals window document getComputedStyle */

import VLine from './object/line';
import VText from './object/text';
import VTextGroup from './object/textgroup';
import VCircle from './object/circle';
import VPolygon from './object/polygon';

import Draw from './draw/draw';
import Config from './config/config';

import Event from './event/visual-event';

const initCanvas = Symbol('initCanvas');
const updateCanvas = Symbol('updateCanvas');

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
            pickupedObjs: [],
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
        // console.log(this.options)

        //
        this.dom = dom;
        this[initCanvas]();
        Event(this);
    }

    [initCanvas]() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this[updateCanvas]();
        this.dom.appendChild(this.canvas);
    }

    [updateCanvas]() {
        const pixelRatio = (window.devicePixelRatio || 1);
        const domStyle = getComputedStyle(this.dom);
        this.width = domStyle.width;
        this.height = domStyle.height;
        this.canvas.width = parseInt(this.width, 10) * pixelRatio;
        this.canvas.height = parseInt(this.height, 10) * pixelRatio;
        this.canvas.style.width = this.width;
        this.canvas.style.height = this.height;
        const xScale = this.options.grid.scale[0];
        const yScale = this.options.grid.scale[1];
        this.ctx.scale(pixelRatio * xScale, pixelRatio * yScale);
    }

    clean() {
        this.sys.objects = [];
        this.draw();
    }

    update(dom, options = {}) {
        // fix param puzzle
        // infact we don't need the param dom, but we already used this.
        let newOptions = options;
        if (dom && options) {
            this.dom = dom;
        } else {
            newOptions = dom;
        }
        //

        Object.assign(this.options, newOptions);
        this[updateCanvas]();
        this.draw();
    }
}

// for every object
Visual.prototype.line = function linefn(path = [], options = {}, userSet) {
    return new VLine(this, path, options, userSet);
};

Visual.prototype.text = function textfn(text, center = [], options = {}, userSet) {
    return new VText(this, text, center, options, userSet);
};

Visual.prototype.textGroup = function textfn(text, point = [], options = {}) {
    return new VTextGroup(this, text, point, options);
};

Visual.prototype.circle = function circlefn(radius, center = [], options = {}, userSet) {
    return new VCircle(this, radius, center, options, userSet);
};

Visual.prototype.polygon = function polygonfn(path = [], options = {}, userSet) {
    return new VPolygon(this, path, options, userSet);
};

// draw

Visual.prototype.draw = Draw;

global.Visual = Visual;