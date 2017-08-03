const step = 10;

const steplizePoint = point => {
    return point.map(item => Math.round(item / step) * step);
};


class Line {
    constructor(Visual, path = [], options) {
        console.log(path)
        this.Visual = Visual;
        this.id = Symbol('line');

        this.Visual.sys.objects.push({
            id: this.id,
            type: Visual.sys.objectTypes.line,
            path: path.map(point => steplizePoint(point)),
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