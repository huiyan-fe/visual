import steplizePoint from '../tools/steplize';

class Line {
    constructor(Visual, pathParams = [], options) {
        this.Visual = Visual;
        this.id = Symbol('line');

        const path = JSON.parse(JSON.stringify(pathParams));

        this.Visual.sys.objects.push({
            id: this.id,
            type: Visual.sys.objectTypes.line,
            path: path.map(point => steplizePoint(point, this.Visual.options.grid.step)),
            options,
            object: this,
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

export default Line;