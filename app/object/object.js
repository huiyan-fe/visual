class VisualObject {
    constructor() {
        this.userSet = {
            dragable: true,
        };
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

    set(type, value) {
        // line.set('disableDrag',true)
        this.userSet = this.userSet || {};
        this.userSet[type] = value;
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

export default VisualObject;