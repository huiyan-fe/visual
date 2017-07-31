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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* globals window document getComputedStyle */

var _visualLine = __webpack_require__(2);

var _visualLine2 = _interopRequireDefault(_visualLine);

var _visualDraw = __webpack_require__(3);

var _visualDraw2 = _interopRequireDefault(_visualDraw);

var _visualMatch = __webpack_require__(5);

var _visualMatch2 = _interopRequireDefault(_visualMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var initCanvas = Symbol('initCanvas');
var initEvent = Symbol('initEvent');

var Visual = function () {
    function Visual(dom) {
        _classCallCheck(this, Visual);

        this.sys = {
            objects: [],
            objectTypes: {
                line: Symbol('line')
            }
        };
        this.dom = dom;
        this[initCanvas]();
        this[initEvent]();
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

            this.dom.appendChild(this.canvas);
        }
    }, {
        key: initEvent,
        value: function value() {
            var _this = this;

            var canvas = this.canvas;
            var datas = this.sys.objects;

            canvas.addEventListener('mousemove', function (e) {
                _visualMatch2.default.match([e.offsetX, e.offsetY], datas);
                _this.draw();
                // console.log(matched[0]);
            });
            canvas.addEventListener('mousedown', function (e) {
                console.log(e.offsetX, e.offsetY);
            });
            canvas.addEventListener('mouseup', function (e) {
                console.log(e.offsetX, e.offsetY);
            });
        }
    }]);

    return Visual;
}();

Visual.prototype.line = _visualLine2.default;
Visual.prototype.draw = _visualDraw2.default;

global.Visual = Visual;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function Line() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments[1];

    this.sys.objects.push({
        id: Symbol('line'),
        type: this.sys.objectTypes.line,
        path: path,
        options: options
    });
    this.draw();
}

exports.default = Line;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _visualDrawLine = __webpack_require__(4);

var _visualDrawLine2 = _interopRequireDefault(_visualDrawLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Draw() {
    var _this = this;

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.canvas.style.cursor = 'default';
    var objects = this.sys.objects || [];
    objects.forEach(function (obj) {
        switch (obj.type) {
            case _this.sys.objectTypes.line:
                (0, _visualDrawLine2.default)(_this.ctx, obj);
                break;
            default:
                console.log('unkone type', obj.type);
        }
    });
}

exports.default = Draw;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function DrawLine(ctx, obj) {
    // draw basic line
    ctx.beginPath();
    ctx.save();
    Object.keys(obj.options).forEach(function (key) {
        ctx[key] = obj.options[key];
    });
    obj.path.forEach(function (item, index) {
        if (index === 0) {
            ctx.moveTo(item[0], item[1]);
        } else {
            ctx.lineTo(item[0], item[1]);
        }
    });
    ctx.stroke();
    ctx.restore();

    // draw handle
    if (obj && obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        // console.log(obj.isActive)
        ctx.save();
        // draw base line
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        obj.path.forEach(function (item, index) {
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
        obj.path.forEach(function (item) {
            ctx.moveTo(item[0] + 4, item[1]);
            ctx.arc(item[0], item[1], 4, 0, Math.PI * 2);
        });
        ctx.fill();
        ctx.stroke();

        //
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            var index = obj.isActive.index;
            var point = obj.path[index];

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var MathTool = {
    match: function match(P, datasGroup) {
        var res = [];
        datasGroup.forEach(function (datas) {
            datas.isActive = null;
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
                    if (lPB < 30 || lAP < 30) {
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
                        if (lPO < 30) {
                            res.push({
                                type: 'vertical',
                                data: datas,
                                projection: O,
                                length: lPO
                            });
                        }
                    }
                }
            });
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

/***/ })
/******/ ]);