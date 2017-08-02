function Text(text = '', point = [0, 0], options) {
    this.sys.objects.push({
        id: Symbol('text'),
        type: this.sys.objectTypes.line,
        text,
        point,
        options,
    });
    this.draw();
}

export default Text;