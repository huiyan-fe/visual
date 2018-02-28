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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    objectTypes: {
        line: (0, _symbol2.default)('line'),
        text: (0, _symbol2.default)('text'),
        textGroup: (0, _symbol2.default)('textGroup'),
        circle: (0, _symbol2.default)('circle'),
        polygon: (0, _symbol2.default)('polygon'),
        curve: (0, _symbol2.default)('curve'),
        arc: (0, _symbol2.default)('arc'),
        image: (0, _symbol2.default)('image')
    },
    objectUserSets: {
        dragable: true, // true: user can drag the objet by using mouse
        bufferSize: 10, // the maximum offset of the point or object that can choose is
        pointEditable: true, // true: user can eidt the point of one object
        boundaryCheck: true,
        mouseOverEventEnable: true,
        clickable: true
        // active: false,
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(70);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(26);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(96);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(100);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VisualObject = function () {
    function VisualObject() {
        var _this = this;

        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, VisualObject);

        this.userSet = {
            // mouseOverEventEnable: true,
            // clickable: true,
            // active: false,
        };

        // set the default config from config
        (0, _keys2.default)(_config2.default.objectUserSets).forEach(function (configKey) {
            if (config[configKey] === undefined) {
                _this.userSet[configKey] = _config2.default.objectUserSets[configKey];
            } else {
                _this.userSet[configKey] = config[configKey];
            }
        });
    }

    (0, _createClass3.default)(VisualObject, [{
        key: 'remove',
        value: function remove() {
            var _this2 = this;

            var objects = this.Visual.sys.objects;
            this.Visual.sys.objects = objects.filter(function (item) {
                return item.id !== _this2.id;
            });
            this.Visual.draw();
        }
    }, {
        key: 'on',
        value: function on(type, fn) {
            this.listens = this.listens || {};
            this.listens[type] = fn;
        }
    }, {
        key: 'set',
        value: function set(type, value) {
            // line.set('disableDrag',true)
            this.userSet = this.userSet || {};
            this.userSet[type] = value;
            this.Visual.draw();
        }
    }, {
        key: 'active',
        value: function active() {
            var _this3 = this;

            var currentSysObj = this.Visual.sys.objects.filter(function (obj) {
                return obj.id === _this3.id;
            });

            // let pathSnapshoot;
            // switch (this.type) {
            //     case Config.objectTypes.line:
            //     case Config.objectTypes.polygon:
            //     case Config.objectTypes.textGroup:
            //         pathSnapshoot = this.path;
            //         break;
            //     case Config.objectTypes.text:
            //     case Config.objectTypes.circle:
            //         pathSnapshoot = this.center;
            //         break;
            //     default: break;
            // }
            // pathSnapshoot = JSON.parse(JSON.stringify(pathSnapshoot));

            // this.Visual.sys.pickupedObjs.push({
            //     pathSnapshoot,
            //     origin: this,
            // });
            currentSysObj[0]['isActive'] = { data: currentSysObj[0] };
            this.Visual.draw();
        }
    }, {
        key: 'unbind',
        value: function unbind(type, fn) {
            this.listens = this.listens || {};
            this.listens[type] = this.listens[type] || [];
            this.listens[type].filter(function (fns) {
                return fns !== fn;
            });
        }
    }, {
        key: 'emit',
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(0);
var ctx = __webpack_require__(45);
var hide = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(48);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(23);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(40);
var wksExt = __webpack_require__(38);
var defineProperty = __webpack_require__(15).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(20);
var dPs = __webpack_require__(79);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(47)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(80).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(91)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(56)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
var global = __webpack_require__(9);
var hide = __webpack_require__(19);
var Iterators = __webpack_require__(24);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function matrixRotation(input, rad) {
    return [input[0] * Math.cos(rad) + input[1] * Math.sin(rad), input[0] * -Math.sin(rad) + input[1] * Math.cos(rad)];
}

function pointsToBezierCurve(points, ctx) {
    var figuredPoints = [];
    points.forEach(function (point, index) {
        var obj = {
            current: point
        };
        var previousPoint = points[index - 1] || point;
        var nextPoint = points[index + 1] || point;
        var vPrevToNext = [nextPoint[0] - previousPoint[0], nextPoint[1] - previousPoint[1]];
        var vNextToPrev = [previousPoint[0] - nextPoint[0], previousPoint[1] - nextPoint[1]];

        /**
         *  make vAB horizontal, so that we can use x to get the e's precent
         *        c
         *                b   =rotate=>           c
         *    a                             a            b
         */

        var vX = [Math.abs(vPrevToNext[0]) || 10, 0];
        var rad = Math.acos((vPrevToNext[0] * vX[0] + vPrevToNext[1] * vX[1]) / ((Math.sqrt(Math.pow(vPrevToNext[0], 2)) + Math.pow(vPrevToNext[1], 2)) * Math.sqrt(Math.pow(vX[0], 2) + Math.pow(vX[1], 2))));
        // console.log(index, rad, vPrevToNext, vX);
        /**
         *[x, y] * [cos(x)  -sin(x)]
         *         [sin(x)  cos(x) ]
         *
         * [x*cos+y*sin, x*-sin+y*cos]
         */
        var transForamtedCurrent = matrixRotation(point, rad);
        var transForamtedPreviousPoint = matrixRotation(previousPoint, rad);
        var transForamtedNextPoint = matrixRotation(nextPoint, rad);
        var xToStart = Math.abs(transForamtedCurrent[0] - transForamtedPreviousPoint[0]);
        var xToEnd = Math.abs(transForamtedCurrent[0] - transForamtedNextPoint[0]);
        var xStartPrecent = 0.5 || xToStart / (xToStart + xToEnd);
        var xEndPrecent = 0.5 || xToEnd / (xToStart + xToEnd);

        // console.log(index, xStartPrecent, xEndPrecent, point, rad, transForamtedCurrent)

        /**
         *          P -- C --- N
         *             /     \
         *          /            \
         *       A ------------------ B
         *
         * vCP = (vBA / 2) * (dPC / dPN);
         *
         * Px-point[0], Py - point[1]]
         *  = [vNextToPrev[0] / 2,vNextToPrev[1] / 2] * xStartPrecent;
         *
         * [Px-point[0], Py - point[1]]
         *  = [vNextToPrev[0] / 2 * xStartPrecent, vNextToPrev[1] / 2 * xStartPrecent];
         *
         * Px = vNextToPrev[0] / 2 * xStartPrecent + point[0];
         * Py = vNextToPrev[1] / 2 * xStartPrecent + point[1];
         */

        // if (index === 0) {
        //     const nextNextPoint = points[index + 2];
        //     const vNextNextPointToNext = [
        //         nextPoint[0] - nextNextPoint[0], nextPoint[1] - nextNextPoint[1],
        //     ];
        //     const vCurrentNext = [
        //         nextPoint[0] - point[0], nextPoint[1] - point[1],
        //     ];
        //     vPrevToNext = [
        //         vNextNextPointToNext[0] + vCurrentNext[0],
        //         vNextNextPointToNext[1] + vCurrentNext[1],
        //     ];
        // }

        // if (index === (points.length - 1)) {
        //     const prePreviousPoint = points[index - 2];
        //     const vPrepreToPre = [
        //         previousPoint[0] - prePreviousPoint[0],
        //         previousPoint[1] - prePreviousPoint[1],
        //     ];
        //     const vCurrentToPre = [
        //         previousPoint[0] - point[0],
        //         previousPoint[1] - point[1],
        //     ];
        //     vNextToPrev = [vPrepreToPre[0] + vCurrentToPre[0], vPrepreToPre[1] + vCurrentToPre[1]];
        // }


        obj.previous = index === 0 ? obj.current : [vNextToPrev[0] / 2 * xStartPrecent + point[0], vNextToPrev[1] / 2 * xStartPrecent + point[1]];
        obj.next = index === points.length - 1 ? obj.current : [vPrevToNext[0] / 2 * xEndPrecent + point[0], vPrevToNext[1] / 2 * xEndPrecent + point[1]];

        // console.log(vPrevToNext, xEndPrecent, obj.next[0] - point[0]);

        figuredPoints.push(obj);
    });

    // // debug
    // if (ctx) {
    //     ctx.beginPath();
    //     figuredPoints.forEach((item, index) => {
    //         ctx.fillStyle = 'black';
    //         ctx.fillText(index, item.current[0], item.current[1]);
    //         ctx.fillRect(item.current[0], item.current[1], 5, 5);

    //         ctx.beginPath();
    //         ctx.fillStyle = 'red';
    //         ctx.fillRect(item.previous[0], item.previous[1], 5, 5);
    //         ctx.fillText(index, item.previous[0], item.previous[1]);

    //         ctx.beginPath();
    //         ctx.fillStyle = 'blue';
    //         ctx.fillRect(item.next[0], item.next[1], 5, 5);
    //         ctx.fillText(index, item.next[0], item.next[1]);
    //     });
    // }

    return figuredPoints;
}

exports.default = pointsToBezierCurve;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(65);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(47)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(67)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(48);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(46);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(28);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(14);
var core = __webpack_require__(0);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(89);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(40);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(50);
var hide = __webpack_require__(19);
var has = __webpack_require__(17);
var Iterators = __webpack_require__(24);
var $iterCreate = __webpack_require__(92);
var setToStringTag = __webpack_require__(37);
var getPrototypeOf = __webpack_require__(53);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawLine(Visual, obj, options) {
    // console.log(obj);
    var ctx = Visual.ctx;
    // draw basic line
    ctx.beginPath();
    ctx.save();

    (0, _keys2.default)(obj.options).forEach(function (key) {
        ctx[key] = obj.options[key];
    });
    var usePath = obj.path;
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
        ctx.save();
        // draw base line
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
        usePath.forEach(function (item, index) {
            if (index === 0) {
                ctx.moveTo(item[0] + 1, item[1] + 1);
            } else {
                ctx.lineTo(item[0] + 1, item[1] + 1);
            }
        });
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
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
        ctx.strokeStyle = '#d6d6d6';
        usePath.forEach(function (item) {
            ctx.rect(item[0] - 4, item[1] - 4, 8, 8);
        });
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        usePath.forEach(function (item) {
            ctx.rect(item[0] - 3, item[1] - 3, 6, 6);
        });
        ctx.stroke();

        var strokeRadius = 14;
        var strokeStyle = 'rgba(255, 0, 0, 1)';
        var fillStyle = '#f00';
        if (options) {
            if (options.strokeRadius) {
                strokeRadius = options.strokeRadius;
            } else if (options.strokeStyle) {
                strokeStyle = options.strokeStyle;
            } else if (options.fillStyle) {
                fillStyle = options.fillStyle;
            }
        }
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            if (obj.isActive.indexs) {
                obj.isActive.indexs.map(function (index) {
                    var point = usePath[index];
                    ctx.beginPath();
                    ctx.strokeStyle = strokeStyle;
                    ctx.fillStyle = fillStyle;
                    ctx.rect(point[0] - strokeRadius / 2, point[1] - strokeRadius / 2, strokeRadius, strokeRadius, Math.PI * 2);
                    ctx.stroke();
                });
            } else {
                var point = usePath[obj.isActive.index];
                ctx.beginPath();
                ctx.strokeStyle = strokeStyle;
                ctx.fillStyle = fillStyle;
                ctx.rect(point[0] - strokeRadius / 2, point[1] - strokeRadius / 2, strokeRadius, strokeRadius, Math.PI * 2);
                ctx.stroke();
            }
        }

        ctx.restore();
    }
}

exports.default = DrawLine;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30);
var TAG = __webpack_require__(6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function boundaryLize(points, boundary) {
    var deficitXmin = 0;
    var deficitYmin = 0;

    var deficitXmax = 0;
    var deficitYmax = 0;

    points.forEach(function (point) {
        deficitXmin = Math.min(deficitXmin, boundary[0] - point[0]);
        deficitYmin = Math.min(deficitYmin, boundary[1] - point[1]);
        deficitXmax = Math.min(point[0], deficitXmax);
        deficitYmax = Math.min(point[1], deficitYmax);
    });

    // console.log(deficitXmax)

    var deficitX = deficitXmax < deficitXmin ? -deficitXmax : deficitXmin;
    var deficitY = deficitYmax < deficitYmin ? -deficitYmax : deficitYmin;

    var bound = points.map(function (point) {
        return [point[0] + deficitX, point[1] + deficitY];
    });
    // console.log('bound', bound);
    return bound;
}

exports.default = boundaryLize;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _assign = __webpack_require__(62);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _line = __webpack_require__(85);

var _line2 = _interopRequireDefault(_line);

var _text = __webpack_require__(105);

var _text2 = _interopRequireDefault(_text);

var _textgroup = __webpack_require__(106);

var _textgroup2 = _interopRequireDefault(_textgroup);

var _circle = __webpack_require__(107);

var _circle2 = _interopRequireDefault(_circle);

var _polygon = __webpack_require__(108);

var _polygon2 = _interopRequireDefault(_polygon);

var _curve = __webpack_require__(109);

var _curve2 = _interopRequireDefault(_curve);

var _arc = __webpack_require__(110);

var _arc2 = _interopRequireDefault(_arc);

var _image = __webpack_require__(111);

var _image2 = _interopRequireDefault(_image);

var _draw = __webpack_require__(112);

var _draw2 = _interopRequireDefault(_draw);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _visualEvent = __webpack_require__(120);

var _visualEvent2 = _interopRequireDefault(_visualEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initCanvas = (0, _symbol2.default)('initCanvas'); /* globals window document getComputedStyle */

var updateCanvas = (0, _symbol2.default)('updateCanvas');

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
        (0, _classCallCheck3.default)(this, Visual);

        this.sys = {
            objects: [],
            objectTypes: _config2.default.objectTypes,
            pickupedObjs: []
        };

        // config
        var basicOptions = {
            grid: {
                step: 1,
                scale: [1, 1]
            }
        };
        (0, _assign2.default)(basicOptions, options);
        this.options = basicOptions;
        // console.log(this.options)

        //
        this.dom = dom;
        this.zoomScale = 1;
        this.box = document.createElement('div');
        this.box.style.overflow = 'hidden';
        // this.box.style['pointer-events'] = 'none';
        this.dom.appendChild(this.box);

        this[initCanvas]();
        (0, _visualEvent2.default)(this);
    }

    (0, _createClass3.default)(Visual, [{
        key: initCanvas,
        value: function value() {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.ratio = window.devicePixelRatio || 1;
            this.initScale = this.options.grid.scale || [1, 1];
            // be careful to use getComputedStyle,it change output while dom change
            var domStyle = getComputedStyle(this.dom);
            this.initDomStyle = {
                width: domStyle.width,
                height: domStyle.height
            };
            this.box.appendChild(this.canvas);
            this[updateCanvas]();
        }
    }, {
        key: updateCanvas,
        value: function value() {
            var scale = this.options.grid.scale || [1, 1];
            var pixelRatio = this.ratio;
            this.width = this.initDomStyle.width;
            this.height = this.initDomStyle.height;
            this.canvas.height = parseInt(this.height, 10) * pixelRatio * Math.max(1, scale[1]);
            this.canvas.width = parseInt(this.width, 10) * pixelRatio * Math.max(1, scale[0]);
            this.canvas.style.height = parseInt(this.height, 10) * Math.max(1, scale[1]) + 'px';
            this.canvas.style.width = parseInt(this.width, 10) * Math.max(1, scale[0]) + 'px';

            // this.box.style.height = `${1500}px`;
            // this.box.style.width = `${2000}px`;
            this.box.style.height = parseInt(this.height, 10) * scale[1] + 'px';
            this.box.style.width = parseInt(this.width, 10) * scale[0] + 'px';

            if (scale[1] > 1 || scale[0] > 1) {
                this.box.style.overflow = 'scroll';
            } else {
                this.box.style.overflow = 'hidden';
                this.box.scrollTop = 0;
                this.box.scrollLeft = 0;
            }

            var xScale = scale[0];
            var yScale = scale[1];
            this.ctx.scale(pixelRatio * xScale, pixelRatio * yScale);
        }
    }, {
        key: 'zoom',
        value: function zoom(_zoom) {
            this.zoomScale = _zoom;
            this.options.grid.scale = this.initScale.map(function (item) {
                return _zoom * item;
            });
            console.log('scale', this.options.grid.scale);
            this.update(this.dom, {
                scale: this.options.grid.scale
            });
            this.draw();
        }
    }, {
        key: 'clean',
        value: function clean() {
            this.sys.objects = [];
            this.draw();
        }
    }, {
        key: 'update',
        value: function update(dom) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            // fix param puzzle
            // infact we don't need the param dom, but we already used this.
            var newOptions = options;
            if (dom && options) {
                this.dom = dom;
            } else {
                newOptions = dom;
            }
            //

            (0, _assign2.default)(this.options, newOptions);
            this[updateCanvas]();
            this.draw();
        }
    }]);
    return Visual;
}();

// for every object


Visual.prototype.line = function linefn() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var userSet = arguments[2];

    return new _line2.default(this, path, options, userSet);
};

Visual.prototype.text = function textfn(text) {
    var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var userSet = arguments[3];

    return new _text2.default(this, text, center, options, userSet);
};

Visual.prototype.textGroup = function textfn(text) {
    var point = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return new _textgroup2.default(this, text, point, options);
};

Visual.prototype.circle = function circlefn(radius) {
    var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var userSet = arguments[3];

    return new _circle2.default(this, radius, center, options, userSet);
};

Visual.prototype.polygon = function polygonfn() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var userSet = arguments[2];

    return new _polygon2.default(this, path, options, userSet);
};

Visual.prototype.curve = function curve() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new _curve2.default(this, path, options);
};

Visual.prototype.arc = function arc(center, radius, startArc, endArc) {
    var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var counterclockwise = arguments[5];

    return new _arc2.default(this, center, radius, startArc, endArc, config, counterclockwise);
};

Visual.prototype.image = function image(imgDom, center, width, height) {
    var rotate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var userSet = arguments[6];

    return new _image2.default(this, imgDom, center, width, height, rotate, options, userSet);
};

// draw
Visual.prototype.draw = _draw2.default;

global.Visual = Visual;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(66) });


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(27);
var toObject = __webpack_require__(28);
var IObject = __webpack_require__(49);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(68);
var toAbsoluteIndex = __webpack_require__(69);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
__webpack_require__(82);
__webpack_require__(83);
__webpack_require__(84);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(9);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(16);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(50);
var META = __webpack_require__(75).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(37);
var uid = __webpack_require__(26);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(38);
var wksDefine = __webpack_require__(39);
var keyOf = __webpack_require__(76);
var enumKeys = __webpack_require__(77);
var isArray = __webpack_require__(78);
var anObject = __webpack_require__(20);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(41);
var gOPNExt = __webpack_require__(81);
var $GOPD = __webpack_require__(52);
var $DP = __webpack_require__(15);
var $keys = __webpack_require__(22);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(51).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(40)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
var isObject = __webpack_require__(23);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(15).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(22);
var toIObject = __webpack_require__(18);
module.exports = function (object, el) {
  var O = toIObject(object);
  var keys = getKeys(O);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) if (O[key = keys[index++]] === el) return key;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(27);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(20);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(51).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 82 */
/***/ (function(module, exports) {



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39)('asyncIterator');


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39)('observable');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(13);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(8);

var _steplize2 = _interopRequireDefault(_steplize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Line = function (_VisualObject) {
    (0, _inherits3.default)(Line, _VisualObject);

    function Line(Visual) {
        var pathParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var options = arguments[2];
        var userSet = arguments[3];
        (0, _classCallCheck3.default)(this, Line);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Line.__proto__ || (0, _getPrototypeOf2.default)(Line)).call(this, options));

        _this.Visual = Visual;
        _this.id = (0, _symbol2.default)('line');
        // Object.assign(this.userSet, userSet);

        var path = JSON.parse((0, _stringify2.default)(pathParams));

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

        _this.type = Visual.sys.objectTypes.line;
        _this.path = path.map(function (point) {
            return (0, _steplize2.default)(point, _this.Visual.options.grid.step);
        });
        _this.options = JSON.parse((0, _stringify2.default)(options));
        _this.sys = {
            outBox: outBox
        };

        _this.Visual.sys.objects.push(_this);
        // this.Visual.sys.objects.push({
        //     id: this.id,
        //     type: Visual.sys.objectTypes.line,
        //     path: path.map(point => steplizePoint(point, this.Visual.options.grid.step)),
        //     options: JSON.parse(JSON.stringify(options)),
        //     object: this,
        //     sys: {
        //         outBox,
        //     },
        // });
        _this.Visual.draw();
        return _this;
    }

    (0, _createClass3.default)(Line, [{
        key: 'setPath',
        value: function setPath(paths) {
            var _this2 = this;

            var path = JSON.parse((0, _stringify2.default)(paths));
            this.path = path.map(function (point) {
                return (0, _steplize2.default)(point, _this2.Visual.options.grid.step);
            });
            this.Visual.draw();
        }
    }]);
    return Line;
}(_object2.default);

exports.default = Line;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(28);
var $getPrototypeOf = __webpack_require__(53);

__webpack_require__(54)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(43);
module.exports = __webpack_require__(38).f('iterator');


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var defined = __webpack_require__(31);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(41);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(37);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(19)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(94);
var step = __webpack_require__(95);
var Iterators = __webpack_require__(24);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(56)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(14);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(99).set });


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(23);
var anObject = __webpack_require__(20);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(45)(Function.call, __webpack_require__(52).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(41) });


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(28);
var $keys = __webpack_require__(22);

__webpack_require__(54)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(13);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(8);

var _steplize2 = _interopRequireDefault(_steplize);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function (_VisualObject) {
    (0, _inherits3.default)(Text, _VisualObject);

    function Text(Visual, text) {
        var centerParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var options = arguments[3];
        var userSet = arguments[4];
        (0, _classCallCheck3.default)(this, Text);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).call(this, options));

        _this.Visual = Visual;
        _this.id = (0, _symbol2.default)('text');
        // Object.assign(this.userSet, userSet);
        var center = JSON.parse((0, _stringify2.default)(centerParam));

        var basicOptions = {};
        (0, _keys2.default)(_config2.default.ctxStyleConfig).forEach(function (key) {
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

        _this.type = Visual.sys.objectTypes.text;
        _this.text = text;
        _this.center = (0, _steplize2.default)(center, _this.Visual.options.grid.step);
        _this.options = options;
        _this.sys = {
            measure: {
                height: height,
                width: width
            },
            spaces: spaces,
            outbox: []
        };

        _this.Visual.sys.objects.push(_this);
        // this.Visual.sys.objects.push({
        //     id: this.id,
        //     type: Visual.sys.objectTypes.text,
        //     text,
        //     center: steplizePoint(center, this.Visual.options.grid.step),
        //     options,
        //     object: this,
        //     sys: {
        //         measure: {
        //             height,
        //             width,
        //         },
        //         spaces,
        //         outbox: [],
        //     },
        // });
        _this.Visual.draw();
        return _this;
    }

    (0, _createClass3.default)(Text, [{
        key: 'setPath',
        value: function setPath(paths) {
            var _this2 = this;

            var path = JSON.parse((0, _stringify2.default)(paths));
            this.center = path.map(function (point) {
                return (0, _steplize2.default)(point, _this2.Visual.options.grid.step);
            });
            this.Visual.draw();
        }
    }]);
    return Text;
}(_object2.default); /* globals document getComputedStyle */

exports.default = Text;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(13);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(8);

var _steplize2 = _interopRequireDefault(_steplize);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextGroup = function (_VisualObject) {
    (0, _inherits3.default)(TextGroup, _VisualObject);

    function TextGroup(Visual, text) {
        var pathParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var options = arguments[3];
        (0, _classCallCheck3.default)(this, TextGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TextGroup.__proto__ || (0, _getPrototypeOf2.default)(TextGroup)).call(this, options));

        _this.Visual = Visual;
        _this.id = (0, _symbol2.default)('textGroup');
        var pathParamReffer = JSON.parse((0, _stringify2.default)(pathParam));
        if (!(pathParamReffer[0] instanceof Array)) {
            pathParamReffer = [pathParamReffer];
        }

        var basicOptions = {};
        (0, _keys2.default)(_config2.default.ctxStyleConfig).forEach(function (key) {
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
        var lastPos = 0;
        var lastChar = '';
        var path = text.split('').map(function (char, index) {
            if (pathParamReffer[index]) {
                lastPos = pathParamReffer[index];
                lastChar = char;
                return pathParamReffer[index];
            }
            var x = lastPos[0] + Visual.ctx.measureText(lastChar).width;
            lastPos = [x, lastPos[1]];
            lastChar = char;
            return [x, lastPos[1]];
        });
        //

        _this.type = Visual.sys.objectTypes.textGroup;
        _this.text = text;
        _this.options = options;
        _this.path = path;
        _this.sys = {
            measure: {
                height: height,
                width: width
            },
            spaces: spaces,
            outbox: []
        };

        _this.Visual.sys.objects.push(_this);
        // this.Visual.sys.objects.push({
        //     id: this.id,
        //     type: Visual.sys.objectTypes.textGroup,
        //     text,
        //     options,
        //     object: this,
        //     path,
        //     sys: {
        //         measure: {
        //             height,
        //             width,
        //         },
        //         spaces,
        //         outbox: [],
        //     },
        // });
        _this.Visual.draw();
        return _this;
    }

    (0, _createClass3.default)(TextGroup, [{
        key: 'setPath',
        value: function setPath(paths) {
            var _this2 = this;

            var path = JSON.parse((0, _stringify2.default)(paths));
            this.path = path.map(function (point) {
                return (0, _steplize2.default)(point, _this2.Visual.options.grid.step);
            });
            this.Visual.draw();
        }
    }]);
    return TextGroup;
}(_object2.default); /* globals document getComputedStyle */

exports.default = TextGroup;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(13);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(8);

var _steplize2 = _interopRequireDefault(_steplize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals */

var Circle = function (_VisualObject) {
    (0, _inherits3.default)(Circle, _VisualObject);

    function Circle(Visual, radius, centerParam, options, userSet) {
        (0, _classCallCheck3.default)(this, Circle);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Circle.__proto__ || (0, _getPrototypeOf2.default)(Circle)).call(this, options));

        _this.Visual = Visual;
        _this.id = (0, _symbol2.default)('circle');
        // this.userSet.bufferSize = 5;
        // Object.assign(this.userSet, userSet);
        var center = JSON.parse((0, _stringify2.default)(centerParam));

        _this.type = Visual.sys.objectTypes.circle;
        _this.radius = radius;
        _this.center = (0, _steplize2.default)(center, _this.Visual.options.grid.step);
        _this.options = options;

        _this.Visual.sys.objects.push(_this);
        // this.Visual.sys.objects.push({
        //     id: this.id,
        //     type: Visual.sys.objectTypes.circle,
        //     radius,
        //     center: steplizePoint(center, this.Visual.options.grid.step),
        //     options,
        //     object: this,
        // });
        _this.Visual.draw();
        return _this;
    }

    (0, _createClass3.default)(Circle, [{
        key: 'setRadiusCenter',
        value: function setRadiusCenter(radius, centerParam) {
            var center = JSON.parse((0, _stringify2.default)(centerParam));
            this.radius = radius;
            this.center = (0, _steplize2.default)(center, this.Visual.options.grid.step);
            this.Visual.draw();
        }
    }]);
    return Circle;
}(_object2.default);

exports.default = Circle;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(13);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(8);

var _steplize2 = _interopRequireDefault(_steplize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Polygon = function (_VisualObject) {
    (0, _inherits3.default)(Polygon, _VisualObject);

    function Polygon(Visual) {
        var pathParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var options = arguments[2];
        var userSet = arguments[3];
        (0, _classCallCheck3.default)(this, Polygon);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Polygon.__proto__ || (0, _getPrototypeOf2.default)(Polygon)).call(this, options));

        _this.Visual = Visual;
        _this.id = (0, _symbol2.default)('polygon');
        // Object.assign(this.userSet, userSet);
        var path = JSON.parse((0, _stringify2.default)(pathParams));

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

        _this.type = Visual.sys.objectTypes.polygon;
        _this.path = path.map(function (point) {
            return (0, _steplize2.default)(point, _this.Visual.options.grid.step);
        });
        _this.options = JSON.parse((0, _stringify2.default)(options));
        _this.sys = {
            outBox: outBox
        };

        _this.Visual.sys.objects.push(_this);
        // this.Visual.sys.objects.push({
        //     id: this.id,
        //     type: Visual.sys.objectTypes.polygon,
        //     path: path.map(point => steplizePoint(point, this.Visual.options.grid.step)),
        //     options: JSON.parse(JSON.stringify(options)),
        //     object: this,
        //     sys: {
        //         outBox,
        //     },
        // });
        _this.Visual.draw();
        return _this;
    }

    (0, _createClass3.default)(Polygon, [{
        key: 'setPath',
        value: function setPath(paths) {
            var _this2 = this;

            var path = JSON.parse((0, _stringify2.default)(paths));
            this.path = path.map(function (point) {
                return (0, _steplize2.default)(point, _this2.Visual.options.grid.step);
            });
            this.Visual.draw();
        }
    }]);
    return Polygon;
}(_object2.default);

exports.default = Polygon;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(13);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(8);

var _steplize2 = _interopRequireDefault(_steplize);

var _pointToBezier = __webpack_require__(44);

var _pointToBezier2 = _interopRequireDefault(_pointToBezier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Curve = function (_VisualObject) {
    (0, _inherits3.default)(Curve, _VisualObject);

    function Curve(Visual) {
        var pathParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var options = arguments[2];
        (0, _classCallCheck3.default)(this, Curve);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Curve.__proto__ || (0, _getPrototypeOf2.default)(Curve)).call(this, options));

        _this.Visual = Visual;
        _this.id = (0, _symbol2.default)('curve');
        // Object.assign(this.userSet, userSet);

        var path = JSON.parse((0, _stringify2.default)(pathParams));

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

        _this.type = Visual.sys.objectTypes.curve;
        _this.path = path.map(function (point) {
            return (0, _steplize2.default)(point, _this.Visual.options.grid.step);
        });
        _this.options = JSON.parse((0, _stringify2.default)(options));
        _this.sys = {
            outBox: outBox
        };

        _this.Visual.sys.objects.push(_this);
        _this.Visual.draw();
        return _this;
    }

    (0, _createClass3.default)(Curve, [{
        key: 'setPath',
        value: function setPath(paths) {
            var _this2 = this;

            var path = JSON.parse((0, _stringify2.default)(paths));
            this.path = path.map(function (point) {
                return (0, _steplize2.default)(point, _this2.Visual.options.grid.step);
            });
            this.Visual.draw();
        }
    }, {
        key: 'getBezier',
        value: function getBezier() {
            return (0, _pointToBezier2.default)(this.path);
        }
    }]);
    return Curve;
}(_object2.default);

exports.default = Curve;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(13);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arc = function (_VisualObject) {
    (0, _inherits3.default)(Arc, _VisualObject);

    function Arc(Visual, center, radius, startArc, endArc, options, counterclockwise) {
        (0, _classCallCheck3.default)(this, Arc);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Arc.__proto__ || (0, _getPrototypeOf2.default)(Arc)).call(this, options));

        _this.Visual = Visual;
        _this.id = (0, _symbol2.default)('arc');

        _this.center = center;
        _this.radius = radius;
        _this.startArc = startArc;
        _this.endArc = endArc;
        _this.counterclockwise = counterclockwise;

        var outBox = {
            xMin: center[0] - radius - 20,
            xMax: center[0] + radius + 20,
            yMin: center[1] - radius - 20,
            yMax: center[1] + radius + 20
        };

        _this.type = Visual.sys.objectTypes.arc;
        _this.options = JSON.parse((0, _stringify2.default)(options));

        var useStart = startArc;
        if (startArc > endArc) {
            useStart -= Math.PI * 2;
        }
        var subOrAdd = counterclockwise ? -1 : 1;
        _this.sys = {
            outBox: outBox,
            startPoint: [center[0] + radius * Math.cos(startArc), center[1] + radius * Math.sin(startArc)],
            endPoint: [center[0] + radius * Math.cos(endArc), center[1] + radius * Math.sin(endArc)],
            centerPoint: [center[0] + subOrAdd * radius * Math.cos((useStart + endArc) / 2), center[1] + subOrAdd * radius * Math.sin((useStart + endArc) / 2)]
        };

        _this.Visual.sys.objects.push(_this);
        _this.Visual.draw();
        return _this;
    }

    return Arc;
}(_object2.default);

exports.default = Arc;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(13);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(8);

var _steplize2 = _interopRequireDefault(_steplize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals */

var Image = function (_VisualObject) {
    (0, _inherits3.default)(Image, _VisualObject);

    function Image(Visual, image, centerParam, width, height, rotate, options, userSet) {
        (0, _classCallCheck3.default)(this, Image);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call(this, options));

        _this.Visual = Visual;
        _this.id = (0, _symbol2.default)('image');
        // this.userSet.bufferSize = 5;
        // Object.assign(this.userSet, userSet);
        var center = JSON.parse((0, _stringify2.default)(centerParam));

        _this.type = Visual.sys.objectTypes.image;
        _this.image = image;
        _this.center = (0, _steplize2.default)(center, _this.Visual.options.grid.step);
        _this.width = width;
        _this.height = height;
        _this.rotate = rotate;
        _this.options = options;

        _this.Visual.sys.objects.push(_this);
        _this.Visual.draw();
        return _this;
    }

    (0, _createClass3.default)(Image, [{
        key: 'setRadiusCenter',
        value: function setRadiusCenter(radius, centerParam) {
            var center = JSON.parse((0, _stringify2.default)(centerParam));
            this.radius = radius;
            this.center = (0, _steplize2.default)(center, this.Visual.options.grid.step);
            this.Visual.draw();
        }
    }]);
    return Image;
}(_object2.default);

exports.default = Image;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _drawLine = __webpack_require__(57);

var _drawLine2 = _interopRequireDefault(_drawLine);

var _drawCurve = __webpack_require__(113);

var _drawCurve2 = _interopRequireDefault(_drawCurve);

var _drawText = __webpack_require__(114);

var _drawText2 = _interopRequireDefault(_drawText);

var _drawTextgroup = __webpack_require__(115);

var _drawTextgroup2 = _interopRequireDefault(_drawTextgroup);

var _drawCircle = __webpack_require__(116);

var _drawCircle2 = _interopRequireDefault(_drawCircle);

var _drawPolygon = __webpack_require__(117);

var _drawPolygon2 = _interopRequireDefault(_drawPolygon);

var _drawArc = __webpack_require__(118);

var _drawArc2 = _interopRequireDefault(_drawArc);

var _drawImage = __webpack_require__(119);

var _drawImage2 = _interopRequireDefault(_drawImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var self = null; /* globals requestAnimationFrame  */

var drawFlag = false;

function Draw() {
    self = this;
    drawFlag = true;
}

function drawFns(obj) {
    var ctx = self.ctx;
    ctx.save();
    // copy from basicoptions
    var basicOptions = _config2.default.ctxStyleConfig;
    (0, _keys2.default)(basicOptions).forEach(function (key) {
        ctx[key] = obj.options[key] || basicOptions[key];
    });
    //
    var options = {
        strokeRadius: 14,
        strokeStyle: 'rgba(255, 0, 0, 1)',
        fillStyle: '#f00'
    };
    switch (obj.type) {
        case self.sys.objectTypes.line:
            (0, _drawLine2.default)(self, obj, options);
            break;
        case self.sys.objectTypes.curve:
            (0, _drawCurve2.default)(self, obj);
            break;
        case self.sys.objectTypes.text:
            (0, _drawText2.default)(self, obj, options);
            break;
        case self.sys.objectTypes.textGroup:
            (0, _drawTextgroup2.default)(self, obj, options);
            break;
        case self.sys.objectTypes.circle:
            (0, _drawCircle2.default)(self, obj, options);
            break;
        case self.sys.objectTypes.polygon:
            (0, _drawPolygon2.default)(self, obj, options);
            break;
        case self.sys.objectTypes.arc:
            (0, _drawArc2.default)(self, obj);
            break;
        case self.sys.objectTypes.image:
            (0, _drawImage2.default)(self, obj);
            break;
        default:
            console.log('unkonw draw type', obj.type);
    }
    ctx.restore();
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _pointToBezier = __webpack_require__(44);

var _pointToBezier2 = _interopRequireDefault(_pointToBezier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawLine(Visual, obj) {
    // console.log(obj);
    var ctx = Visual.ctx;
    // draw basic line

    ctx.save();

    ctx.beginPath();
    (0, _keys2.default)(obj.options).forEach(function (key) {
        ctx[key] = obj.options[key];
    });
    var usePath = obj.path;

    var bezierPoints = (0, _pointToBezier2.default)(obj.path, ctx);
    bezierPoints.forEach(function (currentPoint, index) {
        // ctx.fillRect(currentPoint.current[0] - 3, currentPoint.current[1] - 3, 6, 6);
        if (index > 0) {
            var previousPoint = bezierPoints[index - 1];
            ctx.moveTo(previousPoint.current[0], previousPoint.current[1]);
            ctx.bezierCurveTo(previousPoint.next[0], previousPoint.next[1], currentPoint.previous[0], currentPoint.previous[1], currentPoint.current[0], currentPoint.current[1]);
        }
    });
    ctx.stroke();

    ctx.restore();

    if (obj && obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        ctx.save();

        // draw base line
        ctx.lineWidth = 1;
        ctx.beginPath();
        bezierPoints.forEach(function (currentPoint, index) {
            if (index > 0) {
                var previousPoint = bezierPoints[index - 1];
                ctx.moveTo(previousPoint.current[0], previousPoint.current[1]);
                ctx.bezierCurveTo(previousPoint.next[0], previousPoint.next[1], currentPoint.previous[0], currentPoint.previous[1], currentPoint.current[0], currentPoint.current[1]);
            }
        });
        ctx.translate(1, 1);
        ctx.strokeStyle = '#d6d6d6';
        ctx.stroke();
        ctx.translate(-1, -1);
        ctx.strokeStyle = '#333';
        ctx.stroke();

        // draw handle
        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
        usePath.forEach(function (item) {
            ctx.rect(item[0] - 4, item[1] - 4, 8, 8);
        });
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        usePath.forEach(function (item) {
            ctx.rect(item[0] - 3, item[1] - 3, 6, 6);
        });
        ctx.stroke();

        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            if (obj.isActive.indexs) {
                obj.isActive.indexs.forEach(function (index) {
                    var point = usePath[index];
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
                    ctx.fillStyle = '#fff';
                    ctx.rect(point[0] - 6, point[1] - 6, 12, 12, Math.PI * 2);
                    ctx.stroke();
                });
            } else {
                var point = usePath[obj.isActive.index];
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
                ctx.fillStyle = '#fff';
                ctx.rect(point[0] - 6, point[1] - 6, 12, 12, Math.PI * 2);
                ctx.stroke();
            }
        }

        ctx.restore();
    }
}

exports.default = DrawLine;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawText(Visual, obj, options) {
    // console.warn('a', obj.options);
    var ctx = Visual.ctx;

    var x = obj.center[0];
    var y = obj.center[1];

    // text
    ctx.beginPath();
    ctx.save();
    // copy from operate configs
    var operateConfig = _config2.default.ctxOperationConfig;
    var operate = {};
    (0, _keys2.default)(operateConfig).forEach(function (key) {
        operate[key] = obj.options[key] || operateConfig[key];
    });

    ctx.font = ctx.fontSize + 'px ' + (obj.options.fontFamily || undefined);
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
                break;
            default:
                widthOffset = width / 2;
        }

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
        ctx.translate(x, y);
        ctx.rotate(operate.rotate);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
        ctx.moveTo(-4, -4);
        ctx.rect(-4, -4, 8, 8);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.moveTo(-3, -3);
        ctx.rect(-3, -3, 6, 6);
        ctx.stroke();
        ctx.restore();
    }
}

exports.default = DrawText;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _drawLine = __webpack_require__(57);

var _drawLine2 = _interopRequireDefault(_drawLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawText(Visual, obj) {
    var ctx = Visual.ctx;
    // text
    ctx.beginPath();

    // copy from operate configs
    var operateConfig = _config2.default.ctxOperationConfig;
    var operate = {};
    (0, _keys2.default)(operateConfig).forEach(function (key) {
        operate[key] = obj.options[key] || operateConfig[key];
    });

    //
    ctx.beginPath();
    ctx.font = ctx.fontSize + 'px ' + (obj.options.fontFamily || undefined);
    var texts = obj.text.split('');
    obj.path.forEach(function (pos, index) {
        var x = pos[0];
        var y = pos[1];
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(operate.textRotate || 0);
        ctx.fillText(texts[index], 0, 0);
        ctx.restore();
    });

    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        (0, _drawLine2.default)(Visual, obj);
    }
}

exports.default = DrawText;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function DrawLine(Visual, obj, options) {
    var ctx = Visual.ctx;

    ctx.beginPath();
    ctx.save();
    ctx.arc(obj.center[0], obj.center[1], obj.radius, 0, Math.PI * 2);
    ctx.fill();
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    var strokeRadius = 14;
    var strokeStyle = 'rgba(255, 0, 0, 1)';
    var fillStyle = '#f00';
    if (options) {
        if (options.strokeRadius) {
            strokeRadius = options.strokeRadius;
        } else if (options.strokeStyle) {
            strokeStyle = options.strokeStyle;
        } else if (options.fillStyle) {
            fillStyle = options.fillStyle;
        }
    }
    // const fillStyle = options.fillStyle || '#f00';
    // active
    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = strokeStyle;
        ctx.moveTo(obj.center[0] - 4, obj.center[1] - 4);
        ctx.rect(obj.center[0] - 4, obj.center[1] - 4, 8, 8);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.moveTo(obj.center[0] - 3, obj.center[1] - 3);
        ctx.rect(obj.center[0] - 3, obj.center[1] - 3, 6, 6);
        ctx.stroke();
    }
}

exports.default = DrawLine;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function DrawLine(Visual, obj, options) {
    // console.log(obj);
    var ctx = Visual.ctx;
    // draw basic line
    ctx.beginPath();
    ctx.save();

    var usePath = obj.path;
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
        ctx.save();

        //

        var center = [(obj.sys.outBox.xMax + obj.sys.outBox.xMin) / 2, (obj.sys.outBox.yMax + obj.sys.outBox.yMin) / 2];
        // draw base line
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#d6d6d6';
        firstPoint = [];
        // console.log(center);
        usePath.forEach(function (item, index) {
            var xOffset = item[0] > center[0] ? 1 : -1;
            var yOffset = item[1] > center[1] ? 1 : -1;
            if (index === 0) {
                // console.log(index, obj.sys.outBox, item, xOffset, yOffset);
            }
            if (index === 0) {
                firstPoint = item;
                ctx.moveTo(item[0] + xOffset, item[1] + yOffset);
            } else {
                ctx.lineTo(item[0] + xOffset, item[1] + yOffset);
            }
        });
        ctx.lineTo(firstPoint[0] + 1, firstPoint[1] + 1);
        ctx.stroke();

        // draw base line
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#333';
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
        //

        // handle
        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
        usePath.forEach(function (item) {
            ctx.rect(item[0] - 4, item[1] - 4, 8, 8);
        });
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        usePath.forEach(function (item) {
            ctx.rect(item[0] - 3, item[1] - 3, 6, 6);
        });
        ctx.stroke();

        var strokeRadius = 14;
        var strokeStyle = 'rgba(255, 0, 0, 1)';
        var fillStyle = '#f00';
        if (options) {
            if (options.strokeRadius) {
                strokeRadius = options.strokeRadius;
            } else if (options.strokeStyle) {
                strokeStyle = options.strokeStyle;
            } else if (options.fillStyle) {
                fillStyle = options.fillStyle;
            }
        }

        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            var index = obj.isActive.index;
            var point = usePath[index];
            ctx.beginPath();
            ctx.strokeStyle = strokeStyle;
            ctx.fillStyle = fillStyle;
            ctx.rect(point[0] - strokeRadius / 2, point[1] - strokeRadius / 2, strokeRadius, strokeRadius, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }
}

exports.default = DrawLine;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function DrawLine(Visual, obj) {
    var ctx = Visual.ctx;

    ctx.beginPath();
    ctx.save();
    var counterclockwise = obj.counterclockwise || false; // 默认顺时针

    ctx.arc(obj.center[0], obj.center[1], obj.radius, obj.startArc, obj.endArc, counterclockwise);
    ctx.stroke();
    // ctx.fill();
    // if (obj.options.border) {
    //     ctx.stroke();
    // }
    // ctx.restore();

    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        // draw line
        ctx.beginPath();
        ctx.arc(obj.center[0], obj.center[1], obj.radius, obj.startArc, obj.endArc, counterclockwise);
        ctx.strokeStyle = '#d6d6d6';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(obj.center[0] - 1, obj.center[1] - 1, obj.radius, obj.startArc, obj.endArc, counterclockwise);
        ctx.strokeStyle = '#333';
        ctx.stroke();

        // draw handle
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#d6d6d6';
        [obj.sys.startPoint, obj.sys.endPoint, obj.sys.centerPoint].forEach(function (item) {
            ctx.rect(item[0] - 4, item[1] - 4, 8, 8);
        });
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        [obj.sys.startPoint, obj.sys.endPoint, obj.sys.centerPoint].forEach(function (item) {
            ctx.rect(item[0] - 3, item[1] - 3, 6, 6);
        });
        ctx.stroke();

        // if active is handle point
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            var point = obj.sys[obj.isActive.subtype + 'Point'];
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillStyle = '#fff';
            ctx.rect(point[0] - 6, point[1] - 6, 12, 12, Math.PI * 2);
            ctx.stroke();
        }

        ctx.beginPath();
        // ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.strokeStyle = '#eee';
        ctx.arc(obj.center[0], obj.center[1], 3, 0, Math.PI * 2, counterclockwise);
        ctx.stroke();
    }
}

exports.default = DrawLine;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function DrawImage(Visual, obj, options) {
    var ctx = Visual.ctx;

    ctx.beginPath();
    ctx.save();

    var imgcenter = obj.center;
    var image = obj.image;
    var sx = -(obj.width / 2);
    var sy = -(obj.height / 2);
    var angel = -obj.rotate * Math.PI / 180 || 0;
    ctx.translate(imgcenter[0], imgcenter[1]);
    ctx.rotate(angel);
    ctx.drawImage(image, sx, sy, obj.width, obj.height);
    ctx.fill();
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    var strokeRadius = 14;
    var strokeStyle = 'rgba(255, 0, 0, 1)';
    var fillStyle = '#f00';
    if (options) {
        if (options.strokeRadius) {
            strokeRadius = options.strokeRadius;
        } else if (options.strokeStyle) {
            strokeStyle = options.strokeStyle;
        } else if (options.fillStyle) {
            fillStyle = options.fillStyle;
        }
    }
    // const fillStyle = options.fillStyle || '#f00';
    // active
    if (obj.isActive) {
        var width = obj.width;
        var height = obj.height;
        ctx.canvas.style.cursor = 'pointer';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.save();
        ctx.translate(imgcenter[0], imgcenter[1]);
        ctx.rotate(angel);

        ctx.strokeStyle = strokeStyle;

        ctx.moveTo(-width / 2 - 2, -height / 2 - 2);
        ctx.rect(-width / 2 - 2, -height / 2 - 2, width + 4, height + 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.moveTo(-width / 2, -height / 2);
        ctx.rect(-width / 2, -height / 2, width, height);
        ctx.stroke();

        ctx.restore();
    }
}

exports.default = DrawImage;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(121);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _match = __webpack_require__(129);

var _match2 = _interopRequireDefault(_match);

var _steplize = __webpack_require__(8);

var _steplize2 = _interopRequireDefault(_steplize);

var _scalelize = __webpack_require__(137);

var _move = __webpack_require__(138);

var _move2 = _interopRequireDefault(_move);

var _delete = __webpack_require__(140);

var _delete2 = _interopRequireDefault(_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals window */
var Event = function Event(self) {
    var canvas = self.canvas;
    var mousedownPos = [];
    var hoveredObj = [];
    var mousedown = false;
    var step = self.options.grid.step;
    var events = {
        ctrl: false,
        shift: false,
        alt: false
    };

    var uniqueArr = function uniqueArr(arr) {
        var result = [];
        var hash = {};
        for (var i = 0, elem; (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result;
    };

    window.addEventListener('mousedown', function (e) {
        mousedown = true;
        var x = e.offsetX;
        var y = e.offsetY;

        var _scaleReverse$ = (0, _slicedToArray3.default)((0, _scalelize.scaleReverse)([[x, y]], self.options.grid.scale)[0], 2);

        x = _scaleReverse$[0];
        y = _scaleReverse$[1];


        if (e.target !== canvas) {
            x = -9999;
            y = -9999;
        }
        var eventType = 'mousedown';
        var multichose = events.shift;
        hoveredObj = _match2.default.match([x, y], self.sys.objects, eventType, multichose);

        if (!events.shift) {
            self.sys.pickupedObjs = [];
        }

        if (hoveredObj.length >= 1) {
            var pathSnapshoot = void 0;
            switch (hoveredObj[0].object.type) {
                case _config2.default.objectTypes.line:
                case _config2.default.objectTypes.polygon:
                case _config2.default.objectTypes.curve:
                case _config2.default.objectTypes.textGroup:
                    pathSnapshoot = hoveredObj[0].object.path;
                    break;
                case _config2.default.objectTypes.text:
                case _config2.default.objectTypes.circle:
                case _config2.default.objectTypes.arc:
                case _config2.default.objectTypes.image:
                    pathSnapshoot = hoveredObj[0].object.center;
                    break;
                default:
                    break;
            }
            pathSnapshoot = JSON.parse((0, _stringify2.default)(pathSnapshoot));

            self.sys.pickupedObjs.push({
                pathSnapshoot: pathSnapshoot,
                origin: hoveredObj[0]
            });

            var oneObj = true;
            if (self.sys.pickupedObjs.length > 1) {
                var indexs = self.sys.pickupedObjs.map(function (obj) {
                    if (obj.origin.object.id !== self.sys.pickupedObjs[0].origin.object.id) {
                        oneObj = false;
                    } else {
                        return obj.origin.index;
                    }
                });
                indexs = uniqueArr(indexs);
                if (oneObj) {
                    self.sys.pickupedObjs.forEach(function (obj) {
                        obj.origin.object.isActive.indexs = indexs;
                    });
                }
            }

            mousedownPos = (0, _scalelize.scaleReverse)([[e.pageX, e.pageY]], self.options.grid.scale)[0];
        }
        self.draw();
    });

    window.addEventListener('mousemove', function (e) {
        var x = 0;
        var y = 0;

        if (self.sys.pickupedObjs.length === 0) {
            x = e.offsetX;
            y = e.offsetY;

            var _scaleReverse$2 = (0, _slicedToArray3.default)((0, _scalelize.scaleReverse)([[x, y]], self.options.grid.scale)[0], 2);

            x = _scaleReverse$2[0];
            y = _scaleReverse$2[1];

            if (e.target !== canvas) {
                x = -999;
                y = -999;
            }
            var eventType = 'mousedown';
            var multichose = events.shift;
            hoveredObj = _match2.default.match([x, y], self.sys.objects, eventType, multichose);
        } else {
            if (mousedownPos.length > 0 && mousedown) {
                x = e.pageX;
                y = e.pageY;

                var _scaleReverse$3 = (0, _slicedToArray3.default)((0, _scalelize.scaleReverse)([[x, y]], self.options.grid.scale)[0], 2);

                x = _scaleReverse$3[0];
                y = _scaleReverse$3[1];

                var movedPos = [x - mousedownPos[0], y - mousedownPos[1]];
                movedPos = (0, _steplize2.default)(movedPos, step);
                self.sys.pickupedObjs.forEach(function (pos) {
                    var snapShootPath = pos.pathSnapshoot;
                    var moveObject = pos.origin;
                    if (events.ctrl || events.alt) {
                        moveObject.type = 'object';
                    }
                    if (moveObject.object.userSet.dragable) {
                        (0, _move2.default)(moveObject, snapShootPath, movedPos, step);
                    }
                });
            }
            e.preventDefault();
        }
        self.draw();
    });

    window.addEventListener('mouseup', function () {
        mousedown = false;
        if (events.shift) {
            if (self.sys.pickupedObjs.length > 1) {
                var a = self.sys.pickupedObjs[0];
                var oneObj = true;
                var indexs = self.sys.pickupedObjs.map(function (obj) {
                    if (a.origin.object.id !== obj.origin.object.id) {
                        oneObj = false;
                    }
                    return obj.origin.index;
                });

                var uniIndexs = uniqueArr(indexs);
                if (oneObj) {
                    a.origin.object.emit('finish', {
                        object: a.origin.object,
                        indexs: uniIndexs,
                        type: 'multichose'
                    });
                }
            }
        } else {
            if (self.sys.pickupedObjs.length === 1) {
                self.sys.pickupedObjs.forEach(function (vObj) {
                    vObj.origin.object.emit('finish', {
                        object: vObj.origin.object,
                        type: 'move'
                    });
                    // update
                    var pathSnapshoot = void 0;
                    switch (vObj.origin.object.type) {
                        case _config2.default.objectTypes.line:
                        case _config2.default.objectTypes.curve:
                        case _config2.default.objectTypes.polygon:
                        case _config2.default.objectTypes.textGroup:
                            pathSnapshoot = vObj.origin.object.path;
                            break;
                        case _config2.default.objectTypes.text:
                        case _config2.default.objectTypes.circle:
                        case _config2.default.objectTypes.arc:
                        case _config2.default.objectTypes.image:
                            pathSnapshoot = vObj.origin.object.center;
                            break;
                        default:
                    }
                    pathSnapshoot = JSON.parse((0, _stringify2.default)(pathSnapshoot));
                    vObj.pathSnapshoot = pathSnapshoot;
                });
            }

            // self.sys.pickupedObjs = [];
            hoveredObj.length = 0;
            mousedownPos.length = 0;
        }
    });

    window.addEventListener('keyup', function (e) {
        switch (e.keyCode) {
            case 16:
                events.shift = false;
                break;
            case 17:
                events.ctrl = false;
                break;
            case 18:
                events.alt = false;
                break;
            default:
                break;
        }
    });

    window.addEventListener('keydown', function (e) {
        // e.preventDefault();
        e.stopPropagation();

        if (e.keyCode == 16) {
            events.shift = true;
        }
        if (e.keyCode == 17) {
            events.ctrl = true;
        }
        if (e.keyCode == 18) {
            events.alt = true;
        }

        if (self.sys.pickupedObjs.length > 0) {
            var order = 'update';
            var x = 0;
            var y = 0;
            var eventType = 'keydown';

            switch (e.keyCode) {
                case 9:
                    order = 'cancel';
                    var index = self.sys.pickupedObjs[0].origin.index;
                    if (index === undefined) {
                        index = -1;
                    }
                    if (e.shiftKey) {
                        index -= 1;
                    } else {
                        index += 1;
                    }
                    if (index > self.sys.pickupedObjs[0].origin.object.path.length - 1) {
                        index = 0;
                    }
                    if (index < 0) {
                        index = self.sys.pickupedObjs[0].origin.object.path.length - 1;
                    }
                    self.sys.pickupedObjs[0].origin.index = index;
                    self.sys.pickupedObjs[0].origin.type = 'point';
                    e.preventDefault();
                    break;
                case 8:
                    // BackSpace
                    (0, _delete2.default)(self.sys.pickupedObjs[0]);
                    order = 'cancel';
                    // update active index  & reget the active
                    break;
                case 16:
                    events.shift = true;
                    break;
                case 17:
                    events.ctrl = true;
                    break;
                case 18:
                    events.alt = true;
                    break;
                case 27:
                    // esc
                    self.sys.pickupedObjs = [];
                    hoveredObj = _match2.default.match([-99999, -99999], self.sys.objects, eventType);
                    order = 'cancel';
                    break;
                case 37:
                    // left
                    x = -1;
                    break;
                case 38:
                    // top
                    y = -1;
                    break;
                case 39:
                    // right
                    x = 1;
                    break;
                case 40:
                    // bottom
                    y = 1;
                    break;
                default:
                    order = false;
            }

            // update snapshoot
            var updateSnapshoot = function updateSnapshoot() {
                if (self.sys.pickupedObjs.length > 0) {
                    self.sys.pickupedObjs.map(function (obj) {
                        var pathSnapshoot = void 0;
                        switch (obj.origin.object.type) {
                            case _config2.default.objectTypes.line:
                            case _config2.default.objectTypes.curve:
                            case _config2.default.objectTypes.polygon:
                            case _config2.default.objectTypes.textGroup:
                                pathSnapshoot = obj.origin.object.path;
                                break;
                            case _config2.default.objectTypes.text:
                            case _config2.default.objectTypes.circle:
                            case _config2.default.objectTypes.arc:
                                pathSnapshoot = obj.origin.object.center;
                                break;
                            default:
                        }
                        pathSnapshoot = JSON.parse((0, _stringify2.default)(pathSnapshoot));
                        obj.pathSnapshoot = pathSnapshoot;
                    });
                    // pathSnapshoot = [{},{},{}]
                }
            };
            updateSnapshoot();
            if (order === 'update') {
                if (events.shift) {
                    // console.warn(self.sys.pickupedObjs.length);
                    if (self.sys.pickupedObjs.length > 1) {
                        var a = self.sys.pickupedObjs[0];
                        var oneObj = true;
                        var indexs = self.sys.pickupedObjs.map(function (obj) {
                            updateSnapshoot();
                            var snapShootPath = obj.pathSnapshoot;
                            var moveObject = obj.origin;
                            (0, _move2.default)(moveObject, snapShootPath, [x * step, y * step], step);
                            if (a.origin.object.id !== obj.origin.object.id) {
                                oneObj = false;
                            }
                            return obj.origin.index;
                        });

                        var uniIndexs = uniqueArr(indexs);
                        if (oneObj) {
                            a.origin.object.emit('finish', {
                                object: a.origin.object,
                                indexs: uniIndexs,
                                type: 'multichose'
                            });
                        }
                    }
                } else {
                    var snapShootPath = self.sys.pickupedObjs[0].pathSnapshoot;
                    var moveObject = self.sys.pickupedObjs[0].origin;
                    (0, _move2.default)(moveObject, snapShootPath, [x * step, y * step], step);
                    self.sys.pickupedObjs[0].origin.object.emit('finish', {
                        object: self.sys.pickupedObjs[0].origin.object,
                        type: 'move'
                    });
                }
                e.preventDefault();
            }
            self.draw();
        }
    });
};

exports.default = Event;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(122);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(125);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(42);
module.exports = __webpack_require__(124);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(58);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(24);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(42);
module.exports = __webpack_require__(127);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var get = __webpack_require__(128);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(58);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(24);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _matchLine = __webpack_require__(130);

var _matchLine2 = _interopRequireDefault(_matchLine);

var _matchCurve = __webpack_require__(131);

var _matchCurve2 = _interopRequireDefault(_matchCurve);

var _matchText = __webpack_require__(132);

var _matchText2 = _interopRequireDefault(_matchText);

var _matchCircle = __webpack_require__(133);

var _matchCircle2 = _interopRequireDefault(_matchCircle);

var _matchPolygon = __webpack_require__(134);

var _matchPolygon2 = _interopRequireDefault(_matchPolygon);

var _matchArc = __webpack_require__(135);

var _matchArc2 = _interopRequireDefault(_matchArc);

var _matchImage = __webpack_require__(136);

var _matchImage2 = _interopRequireDefault(_matchImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MathTool = {
    // eventType : mousedown/mousemove/keydown
    match: function match(P, objects, eventType) {
        var multichose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        var res = [];

        objects.forEach(function (object) {
            // remove all the objects' active;
            if (!multichose) {
                object.isActive = null;
            } else {
                // console.log('multichose match');
            }

            switch (object.type) {
                case _config2.default.objectTypes.line:
                case _config2.default.objectTypes.textGroup:
                    (0, _matchLine2.default)(P, object, eventType, res);
                    break;
                case _config2.default.objectTypes.curve:
                    (0, _matchCurve2.default)(P, object, eventType, res);
                    break;
                case _config2.default.objectTypes.text:
                    (0, _matchText2.default)(P, object, eventType, res);
                    break;
                case _config2.default.objectTypes.circle:
                    (0, _matchCircle2.default)(P, object, eventType, res);
                    break;
                case _config2.default.objectTypes.polygon:
                    (0, _matchPolygon2.default)(P, object, eventType, res);
                    break;
                case _config2.default.objectTypes.arc:
                    (0, _matchArc2.default)(P, object, eventType, res);
                    break;
                case _config2.default.objectTypes.image:
                    (0, _matchImage2.default)(P, object, eventType, res);
                    break;
                default:
                    break;
            }
        });

        res.sort(function (a, b) {
            return a.length - b.length;
        });

        if (res[0]) {
            (0, _keys2.default)(res[0]).forEach(function (key) {
                if (key !== 'object') {
                    res[0].object.isActive = res[0].object.isActive || {};
                    res[0].object.isActive[key] = res[0][key];
                }
            });
        }
        return res;
    }
};

exports.default = MathTool;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var matchLine = function matchLine(P, object, eventType, res) {
    if (object.path.length === 1) {
        var B = object.path[0];
        var vPB = [B[0] - P[0], B[1] - P[1]];
        var lPB = Math.sqrt(Math.pow(vPB[0], 2) + Math.pow(vPB[1], 2));
        var bufferSize = object.userSet.bufferSize;
        if (lPB < bufferSize && object.userSet.pointEditable) {
            // pointEditable: when pointEditable is true, we push the active point to res
            res.push({
                type: 'point',
                object: object,
                projection: B,
                length: lPB,
                index: 0
            });
        }
    } else {
        object.path.forEach(function (data, index) {
            if (index !== 0) {
                var A = object.path[index - 1];
                var _B = object.path[index];
                var vAP = [P[0] - A[0], P[1] - A[1]];
                var lAP = Math.sqrt(Math.pow(vAP[0], 2) + Math.pow(vAP[1], 2));
                var vAB = [_B[0] - A[0], _B[1] - A[1]];
                var lAB = Math.sqrt(Math.pow(vAB[0], 2) + Math.pow(vAB[1], 2));
                var _vPB = [_B[0] - P[0], _B[1] - P[1]];
                var _lPB = Math.sqrt(Math.pow(_vPB[0], 2) + Math.pow(_vPB[1], 2));

                var cAPAB = vAP[0] * vAB[0] + vAP[1] * vAB[1];
                var lAPAB = lAP * lAB;
                var rPAB = Math.acos(cAPAB / lAPAB);

                var cABPB = vAB[0] * _vPB[0] + vAB[1] * _vPB[1];
                var lABPB = lAB * Math.sqrt(Math.pow(_vPB[0], 2) + Math.pow(_vPB[1], 2));
                var rPBA = Math.acos(cABPB / lABPB);

                var userSet = object.userSet;
                var _bufferSize = userSet.bufferSize;
                // mouseOverEventEnable: false,
                // clickable: true,
                if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
                    // res.length = 0;
                } else {
                    if ((_lPB < _bufferSize || lAP < _bufferSize) && object.userSet.pointEditable) {
                        // pointEditable: when pointEditable is true, we push the active point to res
                        res.push({
                            type: 'point',
                            object: object,
                            projection: _lPB < lAP ? _B : A,
                            length: _lPB < lAP ? _lPB : lAP,
                            index: _lPB < lAP ? index : index - 1
                        });
                    } else if (rPAB < Math.PI / 2 && rPBA < Math.PI / 2) {
                        var lAO = Math.cos(rPAB) * lAP;
                        var pAOAB = lAO / lAB;
                        var lPO = Math.sin(rPAB) * lAP;
                        var O = [A[0] + vAB[0] * pAOAB, A[1] + vAB[1] * pAOAB];
                        if (lPO < _bufferSize) {
                            res.push({
                                type: 'object',
                                object: object,
                                projection: O,
                                length: lPO
                            });
                        }
                    }
                    if (res.length > 0) {}
                }
            }
        });
        if (res.length > 0) {
            // console.log('match-line', res);
        }
    }
};

exports.default = matchLine;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pointToBezier = __webpack_require__(44);

var _pointToBezier2 = _interopRequireDefault(_pointToBezier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals document */
var textCanvas = document.createElement('canvas');
textCanvas.width = 1;
textCanvas.height = 1;
textCanvas.style.width = '1px';
textCanvas.style.height = '1px';
var ctx = textCanvas.getContext('2d');

var matchPolygon = function matchPolygon(P, object, eventType, res) {

    var userSet = object.userSet;
    var bufferSize = userSet.bufferSize;
    // console.log(userSet.bufferSize)
    ctx.beginPath();
    // object
    var outBox = object.sys.outBox;

    if (P[0] < outBox.xMin - bufferSize || P[0] > outBox.xMax + bufferSize) {
        return false;
    }
    if (P[1] < outBox.yMin - bufferSize || P[1] > outBox.yMax + bufferSize) {
        return false;
    }
    if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
        // res.length = 0;
    } else {
        //
        var bezierPoints = (0, _pointToBezier2.default)(object.path, ctx);
        ctx.lineWidth = (object.options.lineWidth || 0) + bufferSize;
        bezierPoints.forEach(function (currentPoint, index) {
            // ctx.fillRect(currentPoint.current[0] - 3, currentPoint.current[1] - 3, 6, 6);
            if (index > 0) {
                var previousPoint = bezierPoints[index - 1];
                ctx.moveTo(previousPoint.current[0], previousPoint.current[1]);
                ctx.bezierCurveTo(previousPoint.next[0], previousPoint.next[1], currentPoint.previous[0], currentPoint.previous[1], currentPoint.current[0], currentPoint.current[1]);
            }

            // get the length of P and O
            var lPO = Math.sqrt(Math.pow(P[0] - currentPoint.current[0], 2) + Math.pow(P[1] - currentPoint.current[1], 2));
            if (lPO < bufferSize && object.userSet.pointEditable) {
                // pointEditable: when pointEditable is true, we push the active point to res
                res.push({
                    type: 'point',
                    index: index,
                    object: object,
                    length: lPO
                });
            }
        });
        //

        var isFit = ctx.isPointInStroke(P[0], P[1]);
        var center = [(outBox.xMax + outBox.xMin) / 2, (outBox.yMax + outBox.yMin) / 2];
        var length = Math.sqrt(Math.pow(P[0] - center[0], 2) + Math.pow(P[1] - center[1], 2));
        if (isFit) {
            res.push({
                type: 'object',
                object: object,
                length: length
            });
        }
    }

    return res;
};

exports.default = matchPolygon;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

var _config = __webpack_require__(1);

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

var matchText = function matchText(P, object, eventType, res) {
    textCtx.beginPath();
    if (debug) {
        textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    }

    // offset
    var padding = [10, 10];

    (0, _keys2.default)(_config2.default.ctxStyleConfig).forEach(function (key) {
        textCtx[key] = object.options[key] || _config2.default.ctxStyleConfig[key];
    });

    var heightOffset = 0;
    var widthOffset = 0;
    switch (textCtx.textAlign) {
        case 'left':
            widthOffset = -padding[0] / 2;
            break;
        case 'center':
            widthOffset = -(object.sys.measure.width / 2) - padding[0] / 2;
            break;
        case 'right':
            widthOffset = -object.sys.measure.width - padding[0] / 2;
            break;
        default:
            widthOffset = -(object.sys.measure.width / 2) - padding[0] / 2;
    }

    switch (textCtx.textBaseline) {
        case 'top':
            heightOffset = -(padding[1] / 2);
            break;
        case 'alphabetic':
            heightOffset = -object.sys.measure.height + (object.sys.measure.height - textCtx.fontSize) / 2;
            break;
        case 'bottom':
            heightOffset = -object.sys.measure.height - padding[1] / 2;
            break;
        default:
            heightOffset = -(object.sys.measure.height / 2) - padding[1] / 2;
    }

    textCtx.save();
    textCtx.translate(object.center[0], object.center[1]);
    if (object.options.rotate) {
        textCtx.rotate(object.options.rotate);
    }
    textCtx.rect(widthOffset, heightOffset, object.sys.measure.width + padding[0], object.sys.measure.height + padding[1]);

    if (debug) {
        textCtx.fill();
    }
    var isFit = textCtx.isPointInPath(P[0], P[1]);
    if (isFit) {
        var userSet = object.userSet;
        // const bufferSize = userSet.bufferSize;
        // mouseOverEventEnable: false,
        // clickable: true,
        if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
            // res.length = 0;
        } else {
            res.push({
                object: object,
                projection: P,
                length: Math.sqrt(Math.pow(P[0] - object.center[0], 2), Math.pow(P[1] - object.center[1], 2))
            });
        }
    }
    textCtx.restore();
};

exports.default = matchText;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var matchCircle = function matchCircle(P, object, eventType, res) {
    var userSet = object.userSet;
    var bufferSize = userSet.bufferSize;
    // console.log(object)
    var lPC = Math.sqrt(Math.pow(P[0] - object.center[0], 2) + Math.pow(P[1] - object.center[1], 2));
    if (lPC <= object.radius + bufferSize) {
        if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
            // res.length = 0;
        } else {
            res.push({
                object: object,
                length: lPC
            });
        }
    }
};

exports.default = matchCircle;

/***/ }),
/* 134 */
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

var matchPolygon = function matchPolygon(P, object, eventType, res) {
    var userSet = object.userSet;
    var bufferSize = userSet.bufferSize;

    ctx.beginPath();
    // object
    var outBox = object.sys.outBox;

    if (P[0] < outBox.xMin - bufferSize || P[0] > outBox.xMax + bufferSize) {
        return false;
    }
    if (P[1] < outBox.yMin - bufferSize || P[1] > outBox.yMax + bufferSize) {
        return false;
    }
    if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
        // res.length = 0;
    } else {
        ctx.lineWidth = (object.options.lineWidth || 0) + bufferSize;
        object.path.forEach(function (item, index) {
            if (index === 0) {
                ctx.moveTo(item[0], item[1]);
            } else {
                ctx.lineTo(item[0], item[1]);
            }
            // get the length of P and O
            var lPO = Math.sqrt(Math.pow(P[0] - item[0], 2) + Math.pow(P[1] - item[1], 2));
            if (lPO < bufferSize && object.userSet.pointEditable) {
                // pointEditable: when pointEditable is true, we push the active point to res
                res.push({
                    type: 'point',
                    index: index,
                    object: object,
                    length: lPO
                });
            }
        });

        var isFit = ctx.isPointInPath(P[0], P[1]) || ctx.isPointInStroke(P[0], P[1]);
        var center = [(outBox.xMax + outBox.xMin) / 2, (outBox.yMax + outBox.yMin) / 2];
        var length = Math.sqrt(Math.pow(P[0] - center[0], 2) + Math.pow(P[1] - center[1], 2));
        if (isFit) {
            res.push({
                type: 'object',
                object: object,
                length: length
            });
        }
    }

    return res;
};

exports.default = matchPolygon;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// import pointsToBezierCurve from '../tools/pointToBezier';

/* globals document */
var textCanvas = document.createElement('canvas');
textCanvas.width = 1;
textCanvas.height = 1;
textCanvas.style.width = '1px';
textCanvas.style.height = '1px';
var ctx = textCanvas.getContext('2d');

var matchPolygon = function matchPolygon(P, object, eventType, res) {
    var outBox = object.sys.outBox;
    var userSet = object.userSet;
    var bufferSize = userSet.bufferSize;
    if (P[0] < outBox.xMin - bufferSize || P[0] > outBox.xMax + bufferSize) {
        return false;
    }
    if (P[1] < outBox.yMin - bufferSize || P[1] > outBox.yMax + bufferSize) {
        return false;
    }
    // console.log('xxx');
    // return false;


    // console.log(userSet.bufferSize)
    ctx.beginPath();
    // object

    if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
        // res.length = 0;
    } else {
        //
        // const bezierPoints = pointsToBezierCurve(object.path, ctx);
        [object.sys.startPoint, object.sys.endPoint, object.sys.centerPoint].forEach(function (point) {
            var lPO = Math.sqrt(Math.pow(P[0] - point[0], 2) + Math.pow(P[1] - point[1], 2));
            if (lPO < bufferSize && object.userSet.pointEditable) {
                // pointEditable: when pointEditable is true, we push the active point to res
                var subtype = 'center';
                if (object.sys.startPoint === point) {
                    subtype = 'start';
                } else if (object.sys.endPoint === point) {
                    subtype = 'end';
                }
                res.push({
                    type: 'point',
                    subtype: subtype,
                    object: object,
                    point: point,
                    length: lPO
                });
            }
        });

        ctx.lineWidth = (object.options.lineWidth || 0) + bufferSize;
        ctx.beginPath();
        ctx.arc(object.center[0], object.center[1], object.radius, 0, Math.PI * 2);
        ctx.stroke();
        var isFit = ctx.isPointInPath(P[0], P[1]);
        if (isFit) {
            res.push({
                type: 'object',
                object: object,
                length: Math.sqrt(Math.pow(P[0] - object.center[0], 2) + Math.pow(P[1] - object.center[1], 2))
            });
        }
    }

    return res;
};

exports.default = matchPolygon;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var matchImage = function matchImage(P, object, eventType, res) {
    var userSet = object.userSet;
    var bufferSize = userSet.bufferSize;
    // console.log(object)
    var lPC = Math.sqrt(Math.pow(P[0] - object.center[0], 2) + Math.pow(P[1] - object.center[1], 2));
    if (lPC <= object.width / 2 && lPC <= object.height / 2) {
        if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
            // res.length = 0;
        } else {
            res.push({
                object: object,
                length: lPC
            });
        }
    }
};

exports.default = matchImage;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var scaleOrder = function scaleOrder() {
    var pointsArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var scaleValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1, 1];

    if (pointsArr[0] instanceof Array) {
        return pointsArr.map(function (point) {
            return [Math.round(point[0] * scaleValue[0]), Math.round(point[1] * scaleValue[1])];
        });
    }
    return [Math.round(pointsArr[0] * scaleValue[0]), Math.round(pointsArr[1] * scaleValue[1])];
};

var scaleReverse = function scaleReverse() {
    var pointsArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var scaleValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1, 1];

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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _steplize = __webpack_require__(8);

var _steplize2 = _interopRequireDefault(_steplize);

var _boundaryCheck = __webpack_require__(59);

var _boundaryCheck2 = _interopRequireDefault(_boundaryCheck);

var _moveArc = __webpack_require__(139);

var _moveArc2 = _interopRequireDefault(_moveArc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file this file is countrol the move the object
 */

/* global window */

var move = function move(moveObject, snapShootPath, movedPos, step) {
    // console.log('====move', moveObject.object.Visual.canvas);
    var moveType = moveObject.type;
    var object = moveObject.object;

    var moveIndex = null;

    var needBoundaryCheck = object.userSet.boundaryCheck;
    var scale = object.Visual.options.grid.scale || [1, 1];
    var pixelRatio = scale[0] * (window.devicePixelRatio || 1);
    // boundaryCheck
    // console.log(object.userSet.boundaryCheck);
    switch (object.type) {
        case _config2.default.objectTypes.polygon:
        case _config2.default.objectTypes.line:
        case _config2.default.objectTypes.curve:
        case _config2.default.objectTypes.textGroup:
            if (moveType === 'point') {
                moveIndex = moveObject.index;
                if (needBoundaryCheck) {
                    var maxBound = [moveObject.object.Visual.canvas.width / pixelRatio, moveObject.object.Visual.canvas.height / pixelRatio];
                    object.path[moveIndex] = (0, _boundaryCheck2.default)([[snapShootPath[moveIndex][0] + movedPos[0], snapShootPath[moveIndex][1] + movedPos[1]]], maxBound)[0];
                } else {
                    object.path[moveIndex][0] = snapShootPath[moveIndex][0] + movedPos[0];
                    object.path[moveIndex][1] = snapShootPath[moveIndex][1] + movedPos[1];
                }
                object.path[moveIndex] = (0, _steplize2.default)(object.path[moveIndex], step);
            } else {
                if (needBoundaryCheck) {
                    var _maxBound = [moveObject.object.Visual.canvas.width / pixelRatio, moveObject.object.Visual.canvas.height / pixelRatio];
                    object.path = (0, _boundaryCheck2.default)(snapShootPath.map(function (item) {
                        return (0, _steplize2.default)([item[0] + movedPos[0], item[1] + movedPos[1]], step);
                    }), _maxBound);
                } else {
                    object.path = snapShootPath.map(function (item) {
                        return (0, _steplize2.default)([item[0] + movedPos[0], item[1] + movedPos[1]], step);
                    });
                }
            }
            // update outBox
            object.sys.outBox = {
                xMin: Infinity,
                xMax: -Infinity,
                yMin: Infinity,
                yMax: -Infinity
            };
            object.path.forEach(function (point) {
                object.sys.outBox.xMin = Math.min(object.sys.outBox.xMin, point[0]);
                object.sys.outBox.xMax = Math.max(object.sys.outBox.xMax, point[0]);
                object.sys.outBox.yMin = Math.min(object.sys.outBox.yMin, point[1]);
                object.sys.outBox.yMax = Math.max(object.sys.outBox.yMax, point[1]);
            });
            break;
        case _config2.default.objectTypes.text:
        case _config2.default.objectTypes.circle:
        case _config2.default.objectTypes.image:
            if (needBoundaryCheck) {
                var _maxBound2 = [moveObject.object.Visual.canvas.width / pixelRatio, moveObject.object.Visual.canvas.height / pixelRatio];

                object.center = (0, _boundaryCheck2.default)([[snapShootPath[0] + movedPos[0], snapShootPath[1] + movedPos[1]]], _maxBound2)[0];
            } else {
                object.center = [snapShootPath[0] + movedPos[0], snapShootPath[1] + movedPos[1]];
            }
            break;
        case _config2.default.objectTypes.arc:
            (0, _moveArc2.default)(moveObject, snapShootPath, movedPos);
            break;
        default:
    }

    // emit
    var emitObj = {
        type: moveType || 'object',
        object: moveObject.object,
        index: moveIndex
    };
    object.emit('change', emitObj);
};

exports.default = move;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = move;

var _boundaryCheck = __webpack_require__(59);

var _boundaryCheck2 = _interopRequireDefault(_boundaryCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function move(theObject, snapShootPath, movedPos) {
    var object = theObject.object;
    var type = theObject.type;
    var subtype = theObject.subtype;
    var center = snapShootPath;
    var radius = object.radius;
    var counterclockwise = object.counterclockwise;
    var subOrAdd = counterclockwise ? -1 : 1;

    if (type === 'point') {
        var mouse = [theObject.point[0] + movedPos[0], theObject.point[1] + movedPos[1]];
        if (subtype === 'start' || subtype === 'end') {
            var dMouseyCenterX = mouse[0] - center[0];
            var dMouseyCenterY = mouse[1] - center[1];
            var dMouseCentre = Math.sqrt(Math.pow(dMouseyCenterX, 2) + Math.pow(dMouseyCenterY, 2));
            var arc = Math.acos(dMouseyCenterX / dMouseCentre);
            if (dMouseyCenterY < 0) {
                arc = Math.PI * 2 - arc;
            }
            object[subtype + 'Arc'] = arc;

            object.sys[subtype + 'Point'] = [center[0] + radius * Math.cos(arc), center[1] + radius * Math.sin(arc)];

            var useStart = object.startArc;
            if (object.startArc > object.endArc) {
                useStart -= Math.PI * 2;
            }
            object.sys.centerPoint = [center[0] + subOrAdd * radius * Math.cos((useStart + object.endArc) / 2), center[1] + subOrAdd * radius * Math.sin((useStart + object.endArc) / 2)];
        } else if (subtype === 'center') {
            // console.log(object.center, center);
            // console.log(radius)
            // console.log('center', object.center);
            // console.log('arcCenter', object.sys.centerPoint);
            // console.log('mouse', mouse);
            // console.log(object.sys.startPoint)
            // const arcCenter = object.sys.centerPoint;
            var startPoint = object.sys.startPoint;
            var endPoint = object.sys.endPoint;
            // const vCenterToStartPoint = [startPoint[0] - center[0], startPoint[1] - center[1]];
            var vEndToStartPoint = [startPoint[0] - endPoint[0], startPoint[1] - endPoint[1]];
            var vAxleX = [Math.abs(vEndToStartPoint[0]) || 1, 0];

            var arcVendToStartPointTOvAxleX = Math.acos((vEndToStartPoint[0] * vAxleX[0] + vEndToStartPoint[1] * vAxleX[1]) / (Math.sqrt(Math.pow(vEndToStartPoint[0], 2) + Math.pow(vEndToStartPoint[1], 2)) * Math.sqrt(Math.pow(vAxleX[0], 2) + Math.pow(vAxleX[1], 2))));
            // console.warn(arcVendToStartPointTOvAxleX)
            // console.warn(startPoint,arcVendToStartPointTOvAxleX / (Math.PI / 180));

            // const vCenterToMouse = [mouse[0] - center[0], mouse[1] - center[1]];

            // const vCenterToMouseRatated = [
            //     (vCenterToMouse[0] * Math.cos(arcVendToStartPointTOvAxleX)) +
            //     (vCenterToMouse[1] * Math.sin(arcVendToStartPointTOvAxleX)),
            //     (vCenterToMouse[0] * -Math.sin(arcVendToStartPointTOvAxleX)) +
            //     (vCenterToMouse[1] * Math.cos(arcVendToStartPointTOvAxleX)),
            // ];
            // // console.warn(vCenterToArccenter, vAxleX, arcVendToStartPointTOvAxleX / (Math.PI / 180));
            // // console.warn(vCenterToMouse, vCenterToMouseRatated, arcVendToStartPointTOvAxleX / (Math.PI / 180));
            // const newPoint = [0, vCenterToMouseRatated[1]];
            // // 计算方法有问题，应该考虑到弦不过原点

            // // console.log(newPoint, center)

            // const newPointRotated = [
            //     (newPoint[0] * Math.cos(-arcVendToStartPointTOvAxleX)) +
            //     (newPoint[1] * Math.sin(-arcVendToStartPointTOvAxleX)),
            //     (newPoint[0] * -Math.sin(-arcVendToStartPointTOvAxleX)) +
            //     (newPoint[1] * Math.cos(-arcVendToStartPointTOvAxleX)),
            // ];
            // const mouseReflection = [center[0] + newPointRotated[0], center[1] + newPointRotated[1]];
            // console.log(vCenterToMouse, arcVendToStartPointTOvAxleX, newPoint, arcVendToStartPointTOvAxleX);


            // public static function getCirclePoint($pa, $pb, $pc) {
            //     $pa = explode(',', $pa);
            //     $pb = explode(',', $pb);
            //     $pc = explode(',', $pc);

            //     $m = ($pa[0]-$pc[0])*$pa[0] +  ($pa[1]-$pc[1])*$pa[1];
            //     $n = ($pb[0]-$pc[0])*$pb[0] +  ($pb[1]-$pc[1])*$pb[1];
            //     $k = ($pb[0]-$pc[0]) * ($pa[1]-$pc[1]);
            //     $l = ($pa[0]-$pc[0]) * ($pb[1]-$pc[1]);

            //     $x = -1 * ($m*($pb[1]-$pc[1])-$n*($pa[1]-$pc[1])) / ($k-$l);
            //     $y = ($m*($pb[0]-$pc[0])-$n*($pa[0]-$pc[0])) / ($k-$l);

            //     return array($x, $y);
            // }
            // const pStartMouseHalf = [(startPoint[0] + mouseReflection[0]) / 2, (startPoint[1] + mouseReflection[1]) / 2];
            // const pEndMouseHalf = [(endPoint[0] + mouseReflection[0]) / 2, (endPoint[1] + mouseReflection[1]) / 2];

            // const kl = (
            //         (pEndMouseHalf[0] * pStartMouseHalf[1]) -
            //         (pEndMouseHalf[0] * mouseReflection[1]) -
            //         (mouseReflection[0] * pStartMouseHalf[1]) -
            //         (pStartMouseHalf[0] * pEndMouseHalf[1])
            //     ) +
            //     (pStartMouseHalf[0] * mouseReflection[1]) +
            //     (mouseReflection[0] * pEndMouseHalf[1]);

            // const m = (pStartMouseHalf[0] - mouseReflection[0]) * pStartMouseHalf[0] +
            //     pStartMouseHalf[1] * (pStartMouseHalf[1] - mouseReflection[1]);
            // const n = (pEndMouseHalf[0] - mouseReflection[0]) * pEndMouseHalf[0] +
            //     pEndMouseHalf[1] * (pEndMouseHalf[1] - mouseReflection[1]);

            // const y = (m * (pEndMouseHalf[0] - mouseReflection[0]) - n * (pStartMouseHalf[0] - mouseReflection[0])) /
            //     kl;
            // const x = (m * (endPoint[1] - mouseReflection[1]) - n * (pStartMouseHalf[1] - mouseReflection[1])) /
            //     -kl;


            // console.log(startPoint, endPoint, mouseReflection);
            // const m = (startPoint[0] - mouseReflection[0]) * startPoint[0] + (startPoint[1] - mouseReflection[1]) * startPoint[1];
            // const n = (endPoint[0] - mouseReflection[0]) * endPoint[0] + (endPoint[1] - mouseReflection[1]) * endPoint[1];
            // const k = (endPoint[0] - mouseReflection[0]) * (startPoint[1] - mouseReflection[1]);
            // const l = (startPoint[0] - mouseReflection[0]) * (endPoint[1] - mouseReflection[1]);

            // const x = -1 * (m * (endPoint[1] - mouseReflection[1]) - n * (startPoint[1] - mouseReflection[1])) / (k - l);
            // const y = (m * (endPoint[0] - mouseReflection[0]) - n * (startPoint[0] - mouseReflection[0])) / (k - l);
            // console.log([x, y]);

            // return array($x, $y);
            // object.center = [x, y]
            // object.sys.centerPoint = mouseReflection;
            // object.center = [x, y];
            // const newRadius = Math.sqrt((x - mouseReflection[0]) ** 2 + (y - mouseReflection[1]) ** 2);
            // console.log(mouseReflection,center)
            var newRadius = Math.sqrt(Math.pow(center[0] - mouse[0], 2) + Math.pow(center[1] - mouse[1], 2));
            object.radius = newRadius;

            var _useStart = object.startArc;
            if (object.startArc > object.endArc) {
                _useStart -= Math.PI * 2;
            }

            // console.log(object.center[0], object.radius)
            object.sys = {
                outBox: {
                    xMin: object.center[0] - object.radius - 20,
                    xMax: object.center[0] + object.radius + 20,
                    yMin: object.center[1] - object.radius - 20,
                    yMax: object.center[1] + object.radius + 20
                },
                startPoint: [object.center[0] + object.radius * Math.cos(object.startArc), object.center[1] + object.radius * Math.sin(object.startArc)],
                endPoint: [object.center[0] + object.radius * Math.cos(object.endArc), object.center[1] + object.radius * Math.sin(object.endArc)],
                centerPoint: [object.center[0] + subOrAdd * object.radius * Math.cos(_useStart + (object.endArc - _useStart) / 2), object.center[1] + subOrAdd * object.radius * Math.sin(_useStart + (object.endArc - _useStart) / 2)]
            };

            // console.log([x, y])
            // console.log(snapShootPath)

            // const vMousereflectionToStart = [startPoint[0] - mouseReflection[0], startPoint[1] - mouseReflection[1]];
            // const vMousereflectionToEnd = [endPoint[0] - mouseReflection[0], endPoint[1] - mouseReflection[1]];


            // const vMouseReflectionToStartMouseHalf = [pStartMouseHalf[0] - mouseReflection[0], pStartMouseHalf[1] - mouseReflection[1]];
            // const vMouseReflectionToEndMouseHalf = [pEndMouseHalf[0] - mouseReflection[0], pEndMouseHalf[1] - mouseReflection[1]];

            // vStartMouseHalfToCenter = [x - pStartMouseHalf[0], y - pStartMouseHalf[1]];
            // vEndMouseHalfToCenter = [x - pEndMouseHalf[0], y - pEndMouseHalf[1]];
            //
            // (x - pStartMouseHalf[0]) * vMouseReflectionToStartMouseHalf[0] + (y - pStartMouseHalf[1])  * vMouseReflectionToStartMouseHalf[1] = 0
            // (x - pEndMouseHalf[0]) * vMouseReflectionToEndMouseHalf[0] +  (y - pEndMouseHalf[1]) * vMouseReflectionToEndMouseHalf[1] = 0
            //
            // (x - pStartMouseHalf[0]) * vMouseReflectionToStartMouseHalf[0] + (y - pStartMouseHalf[1])  * vMouseReflectionToStartMouseHalf[1] = 0
            // (x - pEndMouseHalf[0]) * vMouseReflectionToEndMouseHalf[0] +  (y - pEndMouseHalf[1]) * vMouseReflectionToEndMouseHalf[1] = 0


            /**
             * (x - startToMouseReflectionHalf[0]) * vMousereflectionToStart[0] = (y - startToMouseReflectionHalf[1]) * vMousereflectionToStart[1]
             * (x - endToMouseReflectionHalf[0]) * vMousereflectionToEnd[0] = (y - endToMouseReflectionHalf[1]) * vMousereflectionToEnd[1]
             */

            /**
             * pNewCenter = [x, y];
             * vMousereflectiontoStartHalfToNewpoint = [x - vMousereflectionToStartHalf[0], y - vMousereflectionToStartHalf[1]];
             * vMousereflectiontoEndHalfToNewpoint = [x - vMousereflectionToEndHalf[0], y - vMousereflectionToEndHalf[1]];
             * vMousereflectionToStartHalf[0] * x + vMousereflectionToStartHalf[1] * y = vMousereflectionToStartHalf[1] ** 2 + vMousereflectionToStartHalf[0] ** 2
             * vMousereflectionToEndHalf[0] * x + vMousereflectionToEndHalf[1] * y = vMousereflectionToEndHalf[1] ** 2 + vMousereflectionToEndHalf[0] ** 2
             * 
             * vMousereflectionToStartHalf[0] * x + vMousereflectionToStartHalf[1] * y = vMousereflectionToStartHalf[1] ** 2 + vMousereflectionToStartHalf[0] ** 2
             * x  = (vMousereflectionToEndHalf[1] ** 2 + vMousereflectionToEndHalf[0] ** 2 - vMousereflectionToEndHalf[1] * y) / vMousereflectionToEndHalf[0]
             * 
             * vMousereflectionToStartHalf[0] * (vMousereflectionToEndHalf[1] ** 2 / vMousereflectionToEndHalf[0] + vMousereflectionToEndHalf[0] ** 2 / vMousereflectionToEndHalf[0] - vMousereflectionToEndHalf[1] * y / vMousereflectionToEndHalf[0]) + vMousereflectionToStartHalf[1] * y = vMousereflectionToStartHalf[1] ** 2 + vMousereflectionToStartHalf[0] ** 2
             * y = (vMousereflectionToStartHalf[0] * (vMousereflectionToEndHalf[1] ** 2 / vMousereflectionToEndHalf[0] + vMousereflectionToEndHalf[0] ** 2 / vMousereflectionToEndHalf[0]) - vMousereflectionToStartHalf[1] ** 2 + vMousereflectionToStartHalf[0] ** 2) / (vMousereflectionToStartHalf[0] * vMousereflectionToEndHalf[1] / vMousereflectionToEndHalf[0] + vMousereflectionToStartHalf[1])
             */

            // console.log(vMousereflectionToStartHalf[0] * vMousereflectionToEndHalf[1] / vMousereflectionToEndHalf[0], vMousereflectionToStartHalf[1])


            /**
             * pNewCenter = [x, y];
             * vMousereflectionToNewCenter = [x - mouseReflection[0], y - mouseReflection[1]]
             * vMousereflectionToStartHalfToNewCenter = [x - vMousereflectionToStartHalf[0], y - vMousereflectionToStartHalf[1]]
             * vMousereflectionToStartHalf + vMousereflectionToStartHalfToNewCenter = vMousereflectionToNewCenter;
             * [vMousereflectionToStartHalf[0], vMousereflectionToStartHalf[1]] + [x - vMousereflectionToStartHalf[0], y - vMousereflectionToStartHalf[1]] = [x - mouseReflection[0], y - mouseReflection[1]]
             */

            // console.warn(mouseReflection)
            // console.log(center, newPointRotated, mouseReflection);
            // console.log(theObject.object.Visual.ctx);
            // let ctx = theObject.object.Visual.ctx;
            // ctx.fillStyle = 'black';
            // ctx.fillRect(mouseReflection[0], mouseReflection[1], 12, 12);

            // object.sys.centerPoint = mouseReflection;
            /**
             * VCenterArcCenter ⊥ vMousePoint
             * vCenterPoint ∥ VCenterArcCenter
             */
            // const vCenterArcCenter = [object.sys.centerPoint[0] - object.center[0], object.sys.centerPoint[1] - object.center[1]];
            // vMousePoint = [x-mouse[0],y - mouse[1]];
            //
            // vCenterPoint = [x-object.center[0],y-object.center[1]]
            // (x - object.center[0]) * vCenterArcCenter[1] - (y - object.center[1]) * vCenterArcCenter[0] = 0
        }
        // console.log(subtype);
    } else {
        // console.log('----')
        var needBoundaryCheck = object.userSet.boundaryCheck;

        if (needBoundaryCheck) {
            var scale = object.Visual.options.grid.scale || [1, 1];
            var pixelRatio = scale[0] * (window.devicePixelRatio || 1);
            var maxBound = [object.Visual.canvas.width / pixelRatio, object.Visual.canvas.height / pixelRatio];
            object.center = (0, _boundaryCheck2.default)([[snapShootPath[0] + movedPos[0], snapShootPath[1] + movedPos[1]]], maxBound)[0];
        } else {
            object.center = [snapShootPath[0] + movedPos[0], snapShootPath[1] + movedPos[1]];
        }

        var _useStart2 = object.startArc;
        if (object.startArc > object.endArc) {
            _useStart2 -= Math.PI * 2;
        }
        object.sys = {
            outBox: {
                xMin: object.center[0] - object.radius - 20,
                xMax: object.center[0] + object.radius + 20,
                yMin: object.center[1] - object.radius - 20,
                yMax: object.center[1] + object.radius + 20
            },
            startPoint: [object.center[0] + object.radius * Math.cos(object.startArc), object.center[1] + object.radius * Math.sin(object.startArc)],
            endPoint: [object.center[0] + object.radius * Math.cos(object.endArc), object.center[1] + object.radius * Math.sin(object.endArc)],
            centerPoint: [object.center[0] + subOrAdd * object.radius * Math.cos(_useStart2 + (object.endArc - _useStart2) / 2), object.center[1] + subOrAdd * object.radius * Math.sin(_useStart2 + (object.endArc - _useStart2) / 2)]
        };
    }
} /* globals window */

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteObject = function deleteObject(object) {
    // console.log(object.origin.isActive)
    // let candelete = object.origin
    // console.log(object)
    var deleteObj = object.origin.object;
    var candelete = true;

    // console.log('@@@@@@@@@@@', object.origin, object.origin.index)
    if (deleteObj.listens.willDeletePoint) {
        candelete = deleteObj.listens.willDeletePoint({
            object: object.origin.object,
            index: object.origin.index
        }) !== false;
    }

    var minPoint = object.origin.object.type === _config2.default.objectTypes.polygon ? 3 : 2;
    if (candelete) {
        if (object.origin.type === 'point' && object.origin.object.path.length > minPoint) {
            object.origin.object.path.splice(object.origin.index, 1);
            if (object.origin.index > object.origin.object.path.length - 1) {
                object.origin.index -= 1;
                object.origin.object.isActive.index -= 1;
            }
        } else {
            object.origin.type = 'object';
        }
    }
};

exports.default = deleteObject;

/***/ })
/******/ ]);