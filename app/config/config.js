const config = {
    objectTypes: {
        line: Symbol('line'),
        text: Symbol('text'),
        circle: Symbol('circle'),
    },
    ctxStyleConfig: {
        fontSize: 12,
        textBaseline: 'alphabetic',
        textAlign: 'left',
        fillStyle: 'black',
        strokeStyle: 'black',
        lineWidth: 1,
    },
    ctxOperationConfig: {
        rotate: 0,
        textRotate: 0,
        splitText: false,
    },
};

export default config;