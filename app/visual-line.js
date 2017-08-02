class Line {
    constructor(Visual, path = [], options) {
        this.Visual = Visual;
        this.id = Symbol('line');

        this.Visual.sys.objects.push({
            id: this.id,
            type: Visual.sys.objectTypes.line,
            path,
            options,
        });
        this.Visual.draw();
    }

    remove() {
        const objects = this.Visual.sys.objects;
        this.Visual.sys.objects = objects.filter(item => item.id !== this.id);
        this.Visual.draw();
    }

}

export default Line;