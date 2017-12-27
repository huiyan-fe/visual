import VisualObject from './object';

class Arc extends VisualObject {
    constructor(Visual, center, radius, startArc, endArc, options, counterclockwise) {
        super(options);
        this.Visual = Visual;
        this.id = Symbol('arc');

        this.center = center;
        this.radius = radius;
        this.startArc = startArc;
        this.endArc = endArc;
        this.counterclockwise = counterclockwise;

        const outBox = {
            xMin: center[0] - radius - 20,
            xMax: center[0] + radius + 20,
            yMin: center[1] - radius - 20,
            yMax: center[1] + radius + 20,
        };

        this.type = Visual.sys.objectTypes.arc;
        this.options = JSON.parse(JSON.stringify(options));


        let useStart = startArc;
        if (startArc > endArc) {
            useStart -= Math.PI * 2;
        }
        const subOrAdd = counterclockwise ? -1 : 1;
        this.sys = {
            outBox,
            startPoint: [
                center[0] + (radius * Math.cos(startArc)),
                center[1] + (radius * Math.sin(startArc)),
            ],
            endPoint: [
                center[0] + (radius * Math.cos(endArc)),
                center[1] + (radius * Math.sin(endArc)),
            ],
            centerPoint: [
                center[0] + (subOrAdd * radius * Math.cos((useStart + endArc) / 2)),
                center[1] + (subOrAdd * radius * Math.sin((useStart + endArc) / 2)),
            ],
        };

        this.Visual.sys.objects.push(this);
        this.Visual.draw();
    }
}

export default Arc;