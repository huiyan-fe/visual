function Line(path = [], options) {
    this.sys.objects.push({
        id: Symbol('line'),
        type: this.sys.objectTypes.line,
        path,
        options,
    });
    this.draw();
}

export default Line;