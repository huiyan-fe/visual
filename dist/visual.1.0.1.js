/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {
    objectTypes: {
        line: Symbol('line'),
        text: Symbol('text'),
        circle: Symbol('circle'),
        polygon: Symbol('polygon')
    },
    ctxStyleConfig: {
        fontSize: 12,
        textBaseline: 'alphabetic',
        textAlign: 'left',
        fillStyle: 'black',
        strokeStyle: 'black',
        lineWidth: 1,
        lineJoin: 'miter',
        lineCap: 'butt'
    },
    ctxOperationConfig: {
        rotate: 0,
        textRotate: 0,
        splitText: false
    }
};

exports.default = config;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var steplizePoint = function steplizePoint() {
  var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var step = arguments[1];
  return point.map(function (item) {
    return Math.round(item / step) * step;
  });
};

exports.default = steplizePoint;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var scaleOrder = function scaleOrder() {
    var pointsArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var scaleValue = arguments[1];

    if (pointsArr[0] instanceof Array) {
        return pointsArr.map(function (point) {
            return [Math.round(point[0] * scaleValue[0]), Math.round(point[1] * scaleValue[1])];
        });
    }
    return [Math.round(pointsArr[0] * scaleValue[0]), Math.round(pointsArr[1] * scaleValue[1])];
};

var scaleReverse = function scaleReverse() {
    var pointsArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var scaleValue = arguments[1];

    if (pointsArr[0] instanceof Array) {
        return pointsArr.map(function (point) {
            return [Math.round(point[0] / scaleValue[0]), Math.round(point[1] / scaleValue[1])];
        });
    }
    return [Math.round(pointsArr[0] / scaleValue[0]), Math.round(pointsArr[1] / scaleValue[1])];
};

exports.scaleOrder = scaleOrder;
exports.scaleReverse = scaleReverse;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VisualObject = function () {
    function VisualObject() {
        _classCallCheck(this, VisualObject);
    }

    _createClass(VisualObject, [{
        key: "remove",
        value: function remove() {
            var _this = this;

            var objects = this.Visual.sys.objects;
            this.Visual.sys.objects = objects.filter(function (item) {
                return item.id !== _this.id;
            });
            this.Visual.draw();
        }
    }, {
        key: "on",
        value: function on(type, fn) {
            this.listens = this.listens || {};
            this.listens[type] = fn;
        }
    }, {
        key: "unbind",
        value: function unbind(type, fn) {
            this.listens = this.listens || {};
            this.listens[type] = this.listens[type] || [];
            this.listens[type].filter(function (fns) {
                return fns !== fn;
            });
        }
    }, {
        key: "emit",
        value: function emit(type, data) {
            this.listens = this.listens || {};
            if (this.listens[type]) {
                this.listens[type](data);
            }
        }
    }]);

    return VisualObject;
}();

exports.default = VisualObject;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* globals window document getComputedStyle */

var _line = __webpack_require__(6);

var _line2 = _interopRequireDefault(_line);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _circle = __webpack_require__(8);

var _circle2 = _interopRequireDefault(_circle);

var _polygon = __webpack_require__(9);

var _polygon2 = _interopRequireDefault(_polygon);

var _draw = __webpack_require__(10);

var _draw2 = _interopRequireDefault(_draw);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _visualEvent = __webpack_require__(15);

var _visualEvent2 = _interopRequireDefault(_visualEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var initCanvas = Symbol('initCanvas');

var Visual = function () {
    /**
     * Visual
     * @param {Document} dom the init document
     * @param {Object} options
     * @param {Object} options.grid
     * @param {Number} options.grid.step the step for every move defalut is 1
     * @param {Array} options.grid.scale the scale of width and height default is [1,1]
     */
    function Visual(dom) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Visual);

        this.sys = {
            objects: [],
            objectTypes: _config2.default.objectTypes
        };

        // config
        var basicOptions = {
            grid: {
                step: 1,
                scale: [1, 1]
            }
        };
        Object.assign(basicOptions, options);
        this.options = basicOptions;

        //
        this.dom = dom;
        this[initCanvas]();
        (0, _visualEvent2.default)(this);
    }

    _createClass(Visual, [{
        key: initCanvas,
        value: function value() {
            var pixelRatio = window.devicePixelRatio || 1;
            var domStyle = getComputedStyle(this.dom);
            this.width = domStyle.width;
            this.height = domStyle.height;

            this.canvas = document.createElement('canvas');
            this.canvas.width = parseInt(this.width, 10) * pixelRatio;
            this.canvas.height = parseInt(this.height, 10) * pixelRatio;
            this.canvas.style.width = this.width;
            this.canvas.style.height = this.height;
            this.ctx = this.canvas.getContext('2d');
            this.ctx.scale(pixelRatio, pixelRatio);

            this.dom.appendChild(this.canvas);
        }
    }, {
        key: 'clean',
        value: function clean() {
            this.sys.objects = [];
            this.draw();
        }
    }]);

    return Visual;
}();

Visual.prototype.line = function linefn() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new _line2.default(this, path, options);
};

Visual.prototype.text = function textfn(text) {
    var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return new _text2.default(this, text, center, options);
};

Visual.prototype.circle = function circlefn(redius) {
    var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return new _circle2.default(this, redius, center, options);
};

Visual.prototype.polygon = function polygonfn() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new _polygon2.default(this, path, options);
};

Visual.prototype.draw = _draw2.default;

global.Visual = Visual;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _object = __webpack_require__(3);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(1);

var _steplize2 = _interopRequireDefault(_steplize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_VisualObject) {
    _inherits(Line, _VisualObject);

    function Line(Visual) {
        var pathParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var options = arguments[2];

        _classCallCheck(this, Line);

        var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this));

        _this.Visual = Visual;
        _this.id = Symbol('line');

        var path = JSON.parse(JSON.stringify(pathParams));

        var outBox = {
            xMin: Infinity,
            xMax: -Infinity,
            yMin: Infinity,
            yMax: -Infinity
        };

        path.forEach(function (point) {
            outBox.xMin = Math.min(outBox.xMin, point[0]);
            outBox.xMax = Math.max(outBox.xMax, point[0]);
            outBox.yMin = Math.min(outBox.yMin, point[1]);
            outBox.yMax = Math.max(outBox.yMax, point[1]);
        });

        _this.Visual.sys.objects.push({
            id: _this.id,
            type: Visual.sys.objectTypes.line,
            path: path.map(function (point) {
                return (0, _steplize2.default)(point, _this.Visual.options.grid.step);
            }),
            options: JSON.parse(JSON.stringify(options)),
            object: _this,
            sys: {
                outBox: outBox
            }
        });
        _this.Visual.draw();
        return _this;
    }

    return Line;
}(_object2.default);

exports.default = Line;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _object = __webpack_require__(3);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(1);

var _steplize2 = _interopRequireDefault(_steplize);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* globals document getComputedStyle */

var Text = function (_VisualObject) {
    _inherits(Text, _VisualObject);

    function Text(Visual, text) {
        var centerParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var options = arguments[3];

        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

        _this.Visual = Visual;
        _this.id = Symbol('text');

        var center = JSON.parse(JSON.stringify(centerParam));

        var basicOptions = {};
        Object.keys(_config2.default.ctxStyleConfig).forEach(function (key) {
            basicOptions[key] = options[key] || _config2.default.ctxStyleConfig[key];
        });

        var span = document.createElement('span');
        span.innerHTML = text;
        span.style.fontSize = basicOptions.fontSize + 'px';
        span.style.fontFamily = basicOptions.fontFamily;
        basicOptions.fontFamily = getComputedStyle(span).fontFamily;
        document.body.appendChild(span);
        var height = span.offsetHeight;
        document.body.removeChild(span);

        //
        var ctx = Visual.ctx;
        ctx.font = basicOptions.fontSize + 'px ' + (basicOptions.fontFamily || undefined);
        var width = Visual.ctx.measureText(text).width;
        var spaces = text.split('').map(function (char) {
            return Visual.ctx.measureText(char).width;
        });
        //

        _this.Visual.sys.objects.push({
            id: _this.id,
            type: Visual.sys.objectTypes.text,
            text: text,
            center: (0, _steplize2.default)(center, _this.Visual.options.grid.step),
            options: options,
            object: _this,
            sys: {
                measure: {
                    height: height,
                    width: width
                },
                spaces: spaces,
                outbox: []
            }
        });
        _this.Visual.draw();
        return _this;
    }

    return Text;
}(_object2.default);

exports.default = Text;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _object = __webpack_require__(3);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(1);

var _steplize2 = _interopRequireDefault(_steplize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* globals */

var Circle = function (_VisualObject) {
    _inherits(Circle, _VisualObject);

    function Circle(Visual, redius, centerParam, options) {
        _classCallCheck(this, Circle);

        var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

        _this.Visual = Visual;
        _this.id = Symbol('circle');

        var center = JSON.parse(JSON.stringify(centerParam));

        _this.Visual.sys.objects.push({
            id: _this.id,
            type: Visual.sys.objectTypes.circle,
            redius: redius,
            center: (0, _steplize2.default)(center, _this.Visual.options.grid.step),
            options: options,
            object: _this
        });
        _this.Visual.draw();
        return _this;
    }

    return Circle;
}(_object2.default);

exports.default = Circle;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _object = __webpack_require__(3);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(1);

var _steplize2 = _interopRequireDefault(_steplize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polygon = function (_VisualObject) {
    _inherits(Polygon, _VisualObject);

    function Polygon(Visual) {
        var pathParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var options = arguments[2];

        _classCallCheck(this, Polygon);

        var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this));

        _this.Visual = Visual;
        _this.id = Symbol('polygon');

        var path = JSON.parse(JSON.stringify(pathParams));

        var outBox = {
            xMin: Infinity,
            xMax: -Infinity,
            yMin: Infinity,
            yMax: -Infinity
        };

        path.forEach(function (point) {
            outBox.xMin = Math.min(outBox.xMin, point[0]);
            outBox.xMax = Math.max(outBox.xMax, point[0]);
            outBox.yMin = Math.min(outBox.yMin, point[1]);
            outBox.yMax = Math.max(outBox.yMax, point[1]);
        });

        _this.Visual.sys.objects.push({
            id: _this.id,
            type: Visual.sys.objectTypes.polygon,
            path: path.map(function (point) {
                return (0, _steplize2.default)(point, _this.Visual.options.grid.step);
            }),
            options: JSON.parse(JSON.stringify(options)),
            object: _this,
            sys: {
                outBox: outBox
            }
        });
        _this.Visual.draw();
        return _this;
    }

    return Polygon;
}(_object2.default);

exports.default = Polygon;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _drawLine = __webpack_require__(11);

var _drawLine2 = _interopRequireDefault(_drawLine);

var _drawText = __webpack_require__(12);

var _drawText2 = _interopRequireDefault(_drawText);

var _drawCircle = __webpack_require__(13);

var _drawCircle2 = _interopRequireDefault(_drawCircle);

var _drawPolygon = __webpack_require__(14);

var _drawPolygon2 = _interopRequireDefault(_drawPolygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals requestAnimationFrame  */

var self = null;
var drawFlag = false;

function Draw() {
    self = this;
    drawFlag = true;
}

function drawFns(obj) {
    switch (obj.type) {
        case self.sys.objectTypes.line:
            (0, _drawLine2.default)(self, obj);
            break;
        case self.sys.objectTypes.text:
            (0, _drawText2.default)(self, obj);
            break;
        case self.sys.objectTypes.circle:
            (0, _drawCircle2.default)(self, obj);
            break;
        case self.sys.objectTypes.polygon:
            (0, _drawPolygon2.default)(self, obj);
            break;
        default:
        // console.log('unkone type', obj.type);
    }
}

(function DrawDispatch() {
    if (self && drawFlag) {
        self.ctx.clearRect(0, 0, self.ctx.canvas.width, self.ctx.canvas.height);
        self.ctx.canvas.style.cursor = 'default';

        var objects = self.sys.objects || [];
        var activeObjects = [];
        objects.forEach(function (obj) {
            if (obj.isActive) {
                activeObjects.push(obj);
            } else {
                drawFns(obj);
            }
        });

        activeObjects.forEach(function (obj) {
            drawFns(obj);
        });
        drawFlag = false;
    }
    requestAnimationFrame(DrawDispatch);
})();

exports.default = Draw;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scalelize = __webpack_require__(2);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawLine(Visual, obj) {
    // console.log(obj);
    var ctx = Visual.ctx;
    // draw basic line
    ctx.beginPath();
    ctx.save();
    var basicOptions = _config2.default.ctxStyleConfig;
    Object.keys(basicOptions).forEach(function (key) {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

    Object.keys(obj.options).forEach(function (key) {
        ctx[key] = obj.options[key];
    });
    var usePath = (0, _scalelize.scaleOrder)(obj.path, Visual.options.grid.scale);
    usePath.forEach(function (item, index) {
        if (index === 0) {
            ctx.moveTo(item[0], item[1]);
        } else {
            ctx.lineTo(item[0], item[1]);
        }
    });
    ctx.stroke();
    ctx.restore();

    if (obj && obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        // console.log(obj.isActive)
        ctx.save();
        // draw base line
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        usePath.forEach(function (item, index) {
            if (index === 0) {
                ctx.moveTo(item[0], item[1]);
            } else {
                ctx.lineTo(item[0], item[1]);
            }
        });
        ctx.stroke();

        // draw handle
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.lineWidth = 2;
        usePath.forEach(function (item) {
            ctx.moveTo(item[0] + 4, item[1]);
            ctx.arc(item[0], item[1], 4, 0, Math.PI * 2);
        });
        ctx.fill();
        ctx.stroke();

        //
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            var index = obj.isActive.index;
            var point = usePath[index];

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillStyle = '#fff';
            ctx.arc(point[0], point[1], 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#fff';
            ctx.fillStyle = '#3385ff';
            ctx.arc(point[0], point[1], 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }
}

exports.default = DrawLine;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _scalelize = __webpack_require__(2);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawText(Visual, obj) {
    // console.warn('a', obj.options);
    var ctx = Visual.ctx;

    var x = obj.center[0];
    var y = obj.center[1];

    // text
    ctx.beginPath();

    // copy from basicoptions
    ctx.save();
    var basicOptions = _config2.default.ctxStyleConfig;

    Object.keys(basicOptions).forEach(function (key) {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

    // copy from operate configs
    var operateConfig = _config2.default.ctxOperationConfig;
    var operate = {};
    Object.keys(operateConfig).forEach(function (key) {
        operate[key] = obj.options[key] || operateConfig[key];
    });

    ctx.font = ctx.fontSize + 'px ' + (obj.options.fontFamily || undefined);

    var _scaleOrder = (0, _scalelize.scaleOrder)([x, y], Visual.options.grid.scale);

    var _scaleOrder2 = _slicedToArray(_scaleOrder, 2);

    x = _scaleOrder2[0];
    y = _scaleOrder2[1];

    ctx.translate(x, y);
    if (operate.textRotate || operate.splitText) {
        // console.log(operate.textRotate);
        obj.text.split('').forEach(function (chart, index) {
            ctx.save();
            ctx.rotate(operate.textRotate);
            ctx.fillText(chart, 0, 0);
            ctx.restore();
            var destenct = obj.sys.spaces[index];
            ctx.translate(destenct * Math.cos(operate.rotate), destenct * Math.sin(operate.rotate));
        });
    } else {
        ctx.rotate(operate.rotate);
        ctx.fillText(obj.text, 0, 0);
    }
    ctx.restore();

    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        // active
        var padding = [10, 10];
        var width = obj.sys.measure.width + padding[0];
        var height = obj.sys.measure.height + padding[1];

        ctx.save();
        Object.keys(basicOptions).forEach(function (key) {
            ctx[key] = obj.options[key] || basicOptions[key];
        });

        var heightOffset = height / 2;
        var widthOffset = width / 2;
        // console.log(ctx.textAlign);
        switch (ctx.textAlign) {
            case 'left':
                widthOffset = padding[0] / 2;
                break;
            case 'center':
                widthOffset = width / 2;
                break;
            case 'right':
                widthOffset = width - padding[0] / 2;
                // console.log(widthOffset)
                break;
            default:
                widthOffset = width / 2;
        }

        // console.log(text.textBaseline)
        switch (ctx.textBaseline) {
            case 'top':
                heightOffset = padding[1] / 2;
                break;
            case 'alphabetic':
                heightOffset = height / 2 + (height - ctx.fontSize) / 2 - padding[1] / 2;
                break;
            case 'bottom':
                heightOffset = height - padding[1] / 2;
                break;
            default:
                heightOffset = height / 2;
                console.log(ctx.textBaseline);
        }

        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.translate(x, y);
        ctx.rotate(operate.rotate);
        ctx.strokeStyle = '#999';
        ctx.fillStyle = 'white';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 1;
        ctx.strokeRect(-widthOffset, -heightOffset, width, height);
        ctx.restore();

        ctx.save();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillStyle = '#fff';
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}

exports.default = DrawText;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scalelize = __webpack_require__(2);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawLine(Visual, obj) {
    var ctx = Visual.ctx;

    var basicOptions = _config2.default.ctxStyleConfig;
    Object.keys(basicOptions).forEach(function (key) {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

    (0, _scalelize.scaleOrder)(obj.center, Visual.options.grid.scale);
    ctx.beginPath();
    ctx.save();
    ctx.arc(obj.center[0], obj.center[1], obj.redius, 0, Math.PI * 2);
    ctx.fill();
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    // active
    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        ctx.save();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillStyle = '#fff';
        ctx.arc(obj.center[0], obj.center[1], 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}

exports.default = DrawLine;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scalelize = __webpack_require__(2);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawLine(Visual, obj) {
    // console.log(obj);
    var ctx = Visual.ctx;
    // draw basic line
    ctx.beginPath();
    ctx.save();
    var basicOptions = _config2.default.ctxStyleConfig;
    Object.keys(basicOptions).forEach(function (key) {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

    var usePath = (0, _scalelize.scaleOrder)(obj.path, Visual.options.grid.scale);
    var firstPoint = [];
    usePath.forEach(function (item, index) {
        if (index === 0) {
            firstPoint = item;
            ctx.moveTo(item[0], item[1]);
        } else {
            ctx.lineTo(item[0], item[1]);
        }
    });
    ctx.lineTo(firstPoint[0], firstPoint[1]);

    if (obj.options.fill !== false) {
        ctx.fill();
    }
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    if (obj && obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        // console.log(obj.isActive)
        ctx.save();
        // draw base line
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#a7caff';
        firstPoint = [];
        usePath.forEach(function (item, index) {
            if (index === 0) {
                firstPoint = item;
                ctx.moveTo(item[0], item[1]);
            } else {
                ctx.lineTo(item[0], item[1]);
            }
        });
        ctx.lineTo(firstPoint[0], firstPoint[1]);
        ctx.stroke();

        // draw handle
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.lineWidth = 2;
        usePath.forEach(function (item) {
            ctx.moveTo(item[0] + 4, item[1]);
            ctx.arc(item[0], item[1], 4, 0, Math.PI * 2);
        });
        ctx.fill();
        ctx.stroke();

        //
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            var index = obj.isActive.index;
            var point = usePath[index];

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillStyle = '#fff';
            ctx.arc(point[0], point[1], 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#fff';
            ctx.fillStyle = '#3385ff';
            ctx.arc(point[0], point[1], 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }
}

exports.default = DrawLine;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* globals window */


var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _match = __webpack_require__(16);

var _match2 = _interopRequireDefault(_match);

var _steplize = __webpack_require__(1);

var _steplize2 = _interopRequireDefault(_steplize);

var _scalelize = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Event = function Event(self) {
    var canvas = self.canvas;
    var mousedownPos = [];
    var hoveredObj = [];
    var pickupedObj = [];
    var step = self.options.grid.step;

    canvas.addEventListener('mousedown', function (e) {
        if (hoveredObj.length >= 1) {
            var pathSnapshoot = void 0;
            switch (hoveredObj[0].data.type) {
                case _config2.default.objectTypes.line:
                case _config2.default.objectTypes.polygon:
                    pathSnapshoot = JSON.parse(JSON.stringify(hoveredObj[0].data.path));
                    break;
                case _config2.default.objectTypes.text:
                case _config2.default.objectTypes.circle:
                    pathSnapshoot = JSON.parse(JSON.stringify(hoveredObj[0].data.center));
                    break;
                default:
            }

            pickupedObj = [{
                pathSnapshoot: pathSnapshoot,
                origin: Object.assign(hoveredObj[0])
            }];
            mousedownPos = (0, _scalelize.scaleReverse)([[e.pageX, e.pageY]], self.options.grid.scale)[0];
        }
    });

    window.addEventListener('mousemove', function (e) {
        var x = 0;
        var y = 0;
        if (pickupedObj.length === 0) {
            x = e.offsetX;
            y = e.offsetY;
            if (e.target !== canvas) {
                x = -999;
                y = -999;
            }

            var _scaleReverse$ = _slicedToArray((0, _scalelize.scaleReverse)([[x, y]], self.options.grid.scale)[0], 2);

            x = _scaleReverse$[0];
            y = _scaleReverse$[1];


            hoveredObj = _match2.default.match([x, y], self.sys.objects);
        } else {
            x = e.pageX;
            y = e.pageY;

            var _scaleReverse$2 = _slicedToArray((0, _scalelize.scaleReverse)([[x, y]], self.options.grid.scale)[0], 2);

            x = _scaleReverse$2[0];
            y = _scaleReverse$2[1];

            var movedPos = [x - mousedownPos[0], y - mousedownPos[1]];
            movedPos = (0, _steplize2.default)(movedPos, step);

            var snapShootPath = pickupedObj[0].pathSnapshoot;
            switch (hoveredObj[0].data.type) {
                case _config2.default.objectTypes.polygon:
                case _config2.default.objectTypes.line:
                    var newPath = [];
                    var isMoveSingle = pickupedObj[0].origin.type === 'point' && pickupedObj[0].origin.length < 10;
                    if (isMoveSingle) {
                        var singleIndex = pickupedObj[0].origin.index;
                        var path = pickupedObj[0].origin.data.path;
                        path[singleIndex][0] = snapShootPath[singleIndex][0] + movedPos[0];
                        path[singleIndex][1] = snapShootPath[singleIndex][1] + movedPos[1];
                        path[singleIndex] = (0, _steplize2.default)(path[singleIndex], step);
                        // emit
                        pickupedObj[0].origin.data.object.emit('change', {
                            type: 'point',
                            index: singleIndex,
                            changeData: JSON.parse(JSON.stringify(path[singleIndex])),
                            object: pickupedObj[0].origin.data
                        });
                    } else {
                        newPath = snapShootPath.map(function (item) {
                            var x = item[0];
                            var y = item[1];
                            x += movedPos[0];
                            y += movedPos[1];
                            return (0, _steplize2.default)([x, y], step);
                        });
                        pickupedObj[0].origin.data.path = newPath;
                        // emit
                        pickupedObj[0].origin.data.object.emit('change', {
                            type: 'line',
                            changeData: newPath,
                            object: pickupedObj[0].origin.data
                        });
                    }
                    // update outBox
                    var sys = pickupedObj[0].origin.data.sys;
                    var outBox = sys.outBox;
                    newPath = pickupedObj[0].origin.data.path;
                    newPath.forEach(function (point) {
                        outBox.xMin = Math.min(outBox.xMin, point[0]);
                        outBox.xMax = Math.max(outBox.xMax, point[0]);
                        outBox.yMin = Math.min(outBox.yMin, point[1]);
                        outBox.yMax = Math.max(outBox.yMax, point[1]);
                    });
                    sys.outBox = outBox;
                    //
                    break;
                case _config2.default.objectTypes.text:
                    pickupedObj[0].origin.data.center = [snapShootPath[0] + movedPos[0], snapShootPath[1] + movedPos[1]];
                    pickupedObj[0].origin.data.object.emit('change', {
                        type: 'center',
                        // changeData: JSON.parse(JSON.stringify([
                        //     snapShootPath[0] + movedPos[0],
                        //     snapShootPath[1] + movedPos[1],
                        // ])),
                        object: pickupedObj[0].origin.data
                    });
                    break;
                case _config2.default.objectTypes.circle:
                    pickupedObj[0].origin.data.center = [snapShootPath[0] + movedPos[0], snapShootPath[1] + movedPos[1]];
                    pickupedObj[0].origin.data.object.emit('change', {
                        object: pickupedObj[0].origin.data
                    });
                    break;
                default:
            }
            e.preventDefault();
        }
        self.draw();
    });

    window.addEventListener('mouseup', function () {
        if (pickupedObj.length > 0) {
            pickupedObj[0].origin.data.object.emit('finish', {
                object: pickupedObj[0].origin.data
            });
        }
        pickupedObj = [];
        mousedownPos = [];
    });
};

exports.default = Event;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _matchLine = __webpack_require__(17);

var _matchLine2 = _interopRequireDefault(_matchLine);

var _matchText = __webpack_require__(18);

var _matchText2 = _interopRequireDefault(_matchText);

var _matchCircle = __webpack_require__(19);

var _matchCircle2 = _interopRequireDefault(_matchCircle);

var _matchPolygon = __webpack_require__(20);

var _matchPolygon2 = _interopRequireDefault(_matchPolygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MathTool = {
    match: function match(P, datasGroup) {
        var res = [];

        datasGroup.forEach(function (datas) {
            switch (datas.type) {
                case _config2.default.objectTypes.line:
                    // for line
                    (0, _matchLine2.default)(P, datas, res);
                    break;
                case _config2.default.objectTypes.text:
                    (0, _matchText2.default)(P, datas, res);
                    break;
                case _config2.default.objectTypes.circle:
                    (0, _matchCircle2.default)(P, datas, res);
                    break;
                case _config2.default.objectTypes.polygon:
                    (0, _matchPolygon2.default)(P, datas, res);
                    break;
                default:
                    break;
            }
        });

        res.sort(function (a, b) {
            return a.length - b.length;
        });

        if (res[0]) {
            res[0].data.isActive = res[0];
        }
        return res;
    }
};

exports.default = MathTool;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var matchLine = function matchLine(P, datas, res) {
    var useData = datas;
    useData.isActive = null;
    datas.path.forEach(function (data, index) {
        if (index !== 0) {
            var A = datas.path[index - 1];
            var B = datas.path[index];
            var vAP = [P[0] - A[0], P[1] - A[1]];
            var lAP = Math.sqrt(Math.pow(vAP[0], 2) + Math.pow(vAP[1], 2));
            var vAB = [B[0] - A[0], B[1] - A[1]];
            var lAB = Math.sqrt(Math.pow(vAB[0], 2) + Math.pow(vAB[1], 2));
            var vPB = [B[0] - P[0], B[1] - P[1]];
            var lPB = Math.sqrt(Math.pow(vPB[0], 2) + Math.pow(vPB[1], 2));

            var cAPAB = vAP[0] * vAB[0] + vAP[1] * vAB[1];
            var lAPAB = lAP * lAB;
            var rPAB = Math.acos(cAPAB / lAPAB);

            var cABPB = vAB[0] * vPB[0] + vAB[1] * vPB[1];
            var lABPB = lAB * Math.sqrt(Math.pow(vPB[0], 2) + Math.pow(vPB[1], 2));
            var rPBA = Math.acos(cABPB / lABPB);

            //
            if (lPB < 15 || lAP < 15) {
                res.push({
                    type: 'point',
                    data: datas,
                    projection: lPB < lAP ? B : A,
                    length: lPB < lAP ? lPB : lAP,
                    index: lPB < lAP ? index : index - 1
                });
            } else if (rPAB < Math.PI / 2 && rPBA < Math.PI / 2) {
                var lAO = Math.cos(rPAB) * lAP;
                var pAOAB = lAO / lAB;
                var lPO = Math.sin(rPAB) * lAP;
                var O = [A[0] + vAB[0] * pAOAB, A[1] + vAB[1] * pAOAB];
                if (lPO < 15) {
                    res.push({
                        type: 'object',
                        data: datas,
                        projection: O,
                        length: lPO
                    });
                }
            }
        }
    });
};

exports.default = matchLine;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = !true; /* globals document window */

var textCanvas = document.createElement('canvas');
textCanvas.width = 1;
textCanvas.height = 1;
textCanvas.style.width = '1px';
textCanvas.style.height = '1px';
var textCtx = textCanvas.getContext('2d');

if (debug) {
    textCanvas.style.border = '1px solid #ccc';
    window.onload = function () {
        document.body.appendChild(textCanvas);
    };
}

var matchText = function matchText(P, datas, res) {
    var useData = datas;
    useData.isActive = null;
    textCtx.beginPath();
    if (debug) {
        textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    }

    // offset
    var padding = [10, 10];

    Object.keys(_config2.default.ctxStyleConfig).forEach(function (key) {
        textCtx[key] = datas.options[key] || _config2.default.ctxStyleConfig[key];
    });

    var heightOffset = 0;
    var widthOffset = 0;
    switch (textCtx.textAlign) {
        case 'left':
            widthOffset = -padding[0] / 2;
            break;
        case 'center':
            widthOffset = -(datas.sys.measure.width / 2) - padding[0] / 2;
            break;
        case 'right':
            widthOffset = -datas.sys.measure.width - padding[0] / 2;
            break;
        default:
            widthOffset = -(datas.sys.measure.width / 2) - padding[0] / 2;
    }

    switch (textCtx.textBaseline) {
        case 'top':
            heightOffset = -(padding[1] / 2);
            break;
        case 'alphabetic':
            heightOffset = -datas.sys.measure.height + (datas.sys.measure.height - textCtx.fontSize) / 2;
            break;
        case 'bottom':
            heightOffset = -datas.sys.measure.height - padding[1] / 2;
            break;
        default:
            heightOffset = -(datas.sys.measure.height / 2) - padding[1] / 2;
    }

    textCtx.save();
    textCtx.translate(datas.center[0], datas.center[1]);
    if (datas.options.rotate) {
        textCtx.rotate(datas.options.rotate);
    }
    textCtx.rect(widthOffset, heightOffset, datas.sys.measure.width + padding[0], datas.sys.measure.height + padding[1]);

    if (debug) {
        textCtx.fill();
    }
    var isFit = textCtx.isPointInPath(P[0], P[1]);
    if (isFit) {
        res.push({
            data: datas,
            projection: P,
            length: Math.sqrt(Math.pow(P[0] - datas.center[0], 2), Math.pow(P[1] - datas.center[1], 2))
        });
    }
    textCtx.restore();
};

exports.default = matchText;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var matchCircle = function matchCircle(P, datas, res) {
    var useData = datas;
    useData.isActive = null;

    var lPC = Math.sqrt(Math.pow(P[0] - datas.center[0], 2) + Math.pow(P[1] - datas.center[1], 2));
    if (lPC <= datas.redius + 5) {
        res.push({
            data: datas,
            length: lPC
        });
    }
};

exports.default = matchCircle;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* globals document */

var textCanvas = document.createElement('canvas');
textCanvas.width = 1;
textCanvas.height = 1;
textCanvas.style.width = '1px';
textCanvas.style.height = '1px';
var ctx = textCanvas.getContext('2d');

var offset = 10;

var matchPolygon = function matchPolygon(P, datas, res) {
    var useData = datas;
    useData.isActive = null;

    ctx.beginPath();
    // object
    var outBox = datas.sys.outBox;

    if (P[0] < outBox.xMin || P[0] > outBox.xMax + offset) {
        return false;
    }
    if (P[1] < outBox.yMin || P[1] > outBox.yMax + offset) {
        return false;
    }

    datas.path.forEach(function (item, index) {
        if (index === 0) {
            ctx.moveTo(item[0], item[1]);
        } else {
            ctx.lineTo(item[0], item[1]);
        }
        // get the length of P and O
        var lPO = Math.sqrt(Math.pow(P[0] - item[0], 2) + Math.pow(P[1] - item[1], 2));
        if (lPO < offset) {
            res.push({
                type: 'point',
                index: index,
                data: datas,
                length: lPO
            });
        }
    });
    // ctx.fill();
    var isFit = ctx.isPointInPath(P[0], P[1]);
    var center = [(outBox.xMax + outBox.xMin) / 2, (outBox.yMax + outBox.yMin) / 2];
    var length = Math.sqrt(Math.pow(P[0] - center[0], 2) + Math.pow(P[1] - center[1], 2));
    if (isFit) {
        res.push({
            type: 'object',
            data: datas,
            length: length
        });
    }
};

exports.default = matchPolygon;

/***/ })
/******/ ]);