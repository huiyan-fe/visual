/* globals window document getComputedStyle */

import Line from './visual-line';
import Draw from './visual-draw';
import MatchTool from './visual-match';

const initCanvas = Symbol('initCanvas');
const initEvent = Symbol('initEvent');

class Visual {
    constructor(dom) {
        this.sys = {
            objects: [],
            objectTypes: {
                line: Symbol('line'),
            },
        };
        this.dom = dom;
        this[initCanvas]();
        this[initEvent]();
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

        this.dom.appendChild(this.canvas);
    }

    [initEvent]() {
        const canvas = this.canvas;
        const datas = this.sys.objects;

        canvas.addEventListener('mousemove', e => {
            MatchTool.match([e.offsetX, e.offsetY], datas);
            this.draw();
            // console.log(matched[0]);
        });
        canvas.addEventListener('mousedown', e => {
            console.log(e.offsetX, e.offsetY);
        });
        canvas.addEventListener('mouseup', e => {
            console.log(e.offsetX, e.offsetY);
        });

    }
}

Visual.prototype.line = Line;
Visual.prototype.draw = Draw;

global.Visual = Visual;