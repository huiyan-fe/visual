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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    objectTypes: {
        line: (0, _symbol2.default)('line'),
        text: (0, _symbol2.default)('text'),
        circle: (0, _symbol2.default)('circle'),
        polygon: (0, _symbol2.default)('polygon')
    },
    objectUserSets: {
        dragable: true, // true: user can drag the objet by using mouse
        bufferSize: 15, // the maximum offset of the point or object that can choose is
        pointEditable: true // true: user can eidt the point of one object
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

var store      = __webpack_require__(34)('wks')
  , uid        = __webpack_require__(22)
  , Symbol     = __webpack_require__(3).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(3)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(44)
  , hide      = __webpack_require__(10)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
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
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(11)
  , IE8_DOM_DEFINE = __webpack_require__(45)
  , toPrimitive    = __webpack_require__(29)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(48)
  , defined = __webpack_require__(31);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(5)
  , createDesc = __webpack_require__(21);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(47)
  , enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(93);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(97);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(49);

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
            mouseOverEventEnable: true,
            clickable: true,
            active: false
        };

        // set the default config from config
        (0, _keys2.default)(_config2.default.objectUserSets).forEach(function (configKey) {
            if (config[configKey] === undefined) {
                _this.userSet[configKey] = _config2.default.objectUserSets[configKey];
            } else {
                _this.userSet[configKey] = config[configKey];
            }
        });

        // console.log(this.userSet.pointEditable);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys')
  , uid    = __webpack_require__(22);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
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

var def = __webpack_require__(5).f
  , has = __webpack_require__(7)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(3)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(40)
  , wksExt         = __webpack_require__(38)
  , defineProperty = __webpack_require__(5).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(11)
  , dPs         = __webpack_require__(76)
  , enumBugKeys = __webpack_require__(35)
  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(46)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(77).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
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

var $at  = __webpack_require__(88)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(56)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
var global        = __webpack_require__(3)
  , hide          = __webpack_require__(10)
  , Iterators     = __webpack_require__(20)
  , TO_STRING_TAG = __webpack_require__(2)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(62);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(12)(function(){
  return Object.defineProperty(__webpack_require__(46)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19)
  , document = __webpack_require__(3).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(7)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(64)(false)
  , IE_PROTO     = __webpack_require__(33)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(67);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(47)
  , hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(23)
  , createDesc     = __webpack_require__(21)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(29)
  , has            = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(45)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(7)
  , toObject    = __webpack_require__(24)
  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(12);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(86);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(9);

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

var LIBRARY        = __webpack_require__(40)
  , $export        = __webpack_require__(4)
  , redefine       = __webpack_require__(50)
  , hide           = __webpack_require__(10)
  , has            = __webpack_require__(7)
  , Iterators      = __webpack_require__(20)
  , $iterCreate    = __webpack_require__(89)
  , setToStringTag = __webpack_require__(37)
  , getPrototypeOf = __webpack_require__(53)
  , ITERATOR       = __webpack_require__(2)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30)
  , TAG = __webpack_require__(2)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(49);

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _line = __webpack_require__(82);

var _line2 = _interopRequireDefault(_line);

var _text = __webpack_require__(100);

var _text2 = _interopRequireDefault(_text);

var _circle = __webpack_require__(103);

var _circle2 = _interopRequireDefault(_circle);

var _polygon = __webpack_require__(104);

var _polygon2 = _interopRequireDefault(_polygon);

var _draw = __webpack_require__(105);

var _draw2 = _interopRequireDefault(_draw);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _visualEvent = __webpack_require__(110);

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
            objectTypes: _config2.default.objectTypes
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
        this[initCanvas]();
        (0, _visualEvent2.default)(this);
    }

    (0, _createClass3.default)(Visual, [{
        key: initCanvas,
        value: function value() {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this[updateCanvas]();
            this.dom.appendChild(this.canvas);
        }
    }, {
        key: updateCanvas,
        value: function value() {
            var pixelRatio = window.devicePixelRatio || 1;
            var domStyle = getComputedStyle(this.dom);
            this.width = domStyle.width;
            this.height = domStyle.height;
            this.canvas.width = parseInt(this.width, 10) * pixelRatio;
            this.canvas.height = parseInt(this.height, 10) * pixelRatio;
            this.canvas.style.width = this.width;
            this.canvas.style.height = this.height;
            var xScale = this.options.grid.scale[0];
            var yScale = this.options.grid.scale[1];
            this.ctx.scale(pixelRatio * xScale, pixelRatio * yScale);
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

Visual.prototype.circle = function circlefn(redius) {
    var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var userSet = arguments[3];

    return new _circle2.default(this, redius, center, options, userSet);
};

Visual.prototype.polygon = function polygonfn() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var userSet = arguments[2];

    return new _polygon2.default(this, path, options, userSet);
};

Visual.prototype.draw = _draw2.default;

global.Visual = Visual;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),
/* 59 */
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(63)});

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(13)
  , gOPS     = __webpack_require__(36)
  , pIE      = __webpack_require__(23)
  , toObject = __webpack_require__(24)
  , IObject  = __webpack_require__(48)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(65)
  , toIndex   = __webpack_require__(66);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(5).f});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
__webpack_require__(79);
__webpack_require__(80);
__webpack_require__(81);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(3)
  , has            = __webpack_require__(7)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(4)
  , redefine       = __webpack_require__(50)
  , META           = __webpack_require__(72).KEY
  , $fails         = __webpack_require__(12)
  , shared         = __webpack_require__(34)
  , setToStringTag = __webpack_require__(37)
  , uid            = __webpack_require__(22)
  , wks            = __webpack_require__(2)
  , wksExt         = __webpack_require__(38)
  , wksDefine      = __webpack_require__(39)
  , keyOf          = __webpack_require__(73)
  , enumKeys       = __webpack_require__(74)
  , isArray        = __webpack_require__(75)
  , anObject       = __webpack_require__(11)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(29)
  , createDesc     = __webpack_require__(21)
  , _create        = __webpack_require__(41)
  , gOPNExt        = __webpack_require__(78)
  , $GOPD          = __webpack_require__(52)
  , $DP            = __webpack_require__(5)
  , $keys          = __webpack_require__(13)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(51).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(23).f  = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(40)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(22)('meta')
  , isObject = __webpack_require__(19)
  , has      = __webpack_require__(7)
  , setDesc  = __webpack_require__(5).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(12)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(13)
  , toIObject = __webpack_require__(8);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(13)
  , gOPS    = __webpack_require__(36)
  , pIE     = __webpack_require__(23);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(5)
  , anObject = __webpack_require__(11)
  , getKeys  = __webpack_require__(13);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3).document && document.documentElement;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8)
  , gOPN      = __webpack_require__(51).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 79 */
/***/ (function(module, exports) {



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39)('asyncIterator');

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39)('observable');

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(15);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(28);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(16);

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
        (0, _assign2.default)(_this.userSet, userSet);

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

        _this.Visual.sys.objects.push({
            id: _this.id,
            type: Visual.sys.objectTypes.line,
            path: path.map(function (point) {
                return (0, _steplize2.default)(point, _this.Visual.options.grid.step);
            }),
            options: JSON.parse((0, _stringify2.default)(options)),
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(24)
  , $getPrototypeOf = __webpack_require__(53);

__webpack_require__(54)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(43);
module.exports = __webpack_require__(38).f('iterator');

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32)
  , defined   = __webpack_require__(31);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(41)
  , descriptor     = __webpack_require__(21)
  , setToStringTag = __webpack_require__(37)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(91)
  , step             = __webpack_require__(92)
  , Iterators        = __webpack_require__(20)
  , toIObject        = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(56)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(4);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(96).set});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(19)
  , anObject = __webpack_require__(11);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(44)(Function.call, __webpack_require__(52).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(41)});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(15);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(28);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(16);

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
        (0, _assign2.default)(_this.userSet, userSet);
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
}(_object2.default); /* globals document getComputedStyle */

exports.default = Text;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(24)
  , $keys    = __webpack_require__(13);

__webpack_require__(54)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(15);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(28);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(16);

var _steplize2 = _interopRequireDefault(_steplize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals */

var Circle = function (_VisualObject) {
    (0, _inherits3.default)(Circle, _VisualObject);

    function Circle(Visual, redius, centerParam, options, userSet) {
        (0, _classCallCheck3.default)(this, Circle);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Circle.__proto__ || (0, _getPrototypeOf2.default)(Circle)).call(this, options));

        _this.Visual = Visual;
        _this.id = (0, _symbol2.default)('circle');
        _this.userSet.bufferSize = 5;
        (0, _assign2.default)(_this.userSet, userSet);
        var center = JSON.parse((0, _stringify2.default)(centerParam));

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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(15);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _object = __webpack_require__(28);

var _object2 = _interopRequireDefault(_object);

var _steplize = __webpack_require__(16);

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
        (0, _assign2.default)(_this.userSet, userSet);
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

        _this.Visual.sys.objects.push({
            id: _this.id,
            type: Visual.sys.objectTypes.polygon,
            path: path.map(function (point) {
                return (0, _steplize2.default)(point, _this.Visual.options.grid.step);
            }),
            options: JSON.parse((0, _stringify2.default)(options)),
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _drawLine = __webpack_require__(106);

var _drawLine2 = _interopRequireDefault(_drawLine);

var _drawText = __webpack_require__(107);

var _drawText2 = _interopRequireDefault(_drawText);

var _drawCircle = __webpack_require__(108);

var _drawCircle2 = _interopRequireDefault(_drawCircle);

var _drawPolygon = __webpack_require__(109);

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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawLine(Visual, obj) {
    // console.log(obj);
    var ctx = Visual.ctx;
    // draw basic line
    ctx.beginPath();
    ctx.save();
    var basicOptions = _config2.default.ctxStyleConfig;
    (0, _keys2.default)(basicOptions).forEach(function (key) {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

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

    var userSet = obj.object.userSet;
    if (userSet && userSet.active) {
        if (!(obj && obj.isActive)) {
            // userSet.active = false;
            obj['isActive'] = { data: obj };
        }
    }

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

        //
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            var index = obj.isActive.index;
            var point = usePath[index];
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillStyle = '#fff';
            ctx.rect(point[0] - 6, point[1] - 6, 12, 12, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }
}

exports.default = DrawLine;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _config = __webpack_require__(1);

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

    (0, _keys2.default)(basicOptions).forEach(function (key) {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

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

    var userSet = obj.object.userSet;
    if (userSet && userSet.active) {
        if (!(obj && obj.isActive)) {
            // userSet.active = false;
            obj['isActive'] = { data: obj };
        }
    }
    if (obj.isActive) {
        ctx.canvas.style.cursor = 'pointer';
        // active
        var padding = [10, 10];
        var width = obj.sys.measure.width + padding[0];
        var height = obj.sys.measure.height + padding[1];

        ctx.save();
        (0, _keys2.default)(basicOptions).forEach(function (key) {
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
            // console.log(ctx.textBaseline);
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawLine(Visual, obj) {
    var ctx = Visual.ctx;

    var basicOptions = _config2.default.ctxStyleConfig;
    (0, _keys2.default)(basicOptions).forEach(function (key) {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

    ctx.beginPath();
    ctx.save();
    ctx.arc(obj.center[0], obj.center[1], obj.redius, 0, Math.PI * 2);
    ctx.fill();
    if (obj.options.border) {
        ctx.stroke();
    }
    ctx.restore();

    var userSet = obj.object.userSet;
    if (userSet && userSet.active) {
        if (!(obj && obj.isActive)) {
            // userSet.active = false;
            obj['isActive'] = { data: obj };
        }
    }

    // active
    if (obj.isActive) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = '#d6d6d6';
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawLine(Visual, obj) {
    // console.log(obj);
    var ctx = Visual.ctx;
    // draw basic line
    ctx.beginPath();
    ctx.save();
    var basicOptions = _config2.default.ctxStyleConfig;
    (0, _keys2.default)(basicOptions).forEach(function (key) {
        ctx[key] = obj.options[key] || basicOptions[key];
    });

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
    var userSet = obj.object.userSet;
    if (userSet && userSet.active) {
        if (!(obj && obj.isActive)) {
            // userSet.active = false;
            obj['isActive'] = { data: obj };
        }
    }
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

        //
        if (obj.isActive.type === 'point' && obj.isActive.length < 10) {
            var index = obj.isActive.index;
            var point = usePath[index];
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillStyle = '#fff';
            ctx.rect(point[0] - 6, point[1] - 6, 12, 12, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }
}

exports.default = DrawLine;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(15);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(111);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _match = __webpack_require__(119);

var _match2 = _interopRequireDefault(_match);

var _steplize = __webpack_require__(16);

var _steplize2 = _interopRequireDefault(_steplize);

var _scalelize = __webpack_require__(124);

var _move = __webpack_require__(125);

var _move2 = _interopRequireDefault(_move);

var _delete = __webpack_require__(126);

var _delete2 = _interopRequireDefault(_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals window */
var Event = function Event(self) {
    var canvas = self.canvas;
    var mousedownPos = [];
    var hoveredObj = [];
    var pickupedObj = [];
    var step = self.options.grid.step;

    window.addEventListener('mousedown', function (e) {
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
        hoveredObj = _match2.default.match([x, y], self.sys.objects, eventType);

        if (hoveredObj.length >= 1) {
            var pathSnapshoot = void 0;
            switch (hoveredObj[0].data.type) {
                case _config2.default.objectTypes.line:
                case _config2.default.objectTypes.polygon:
                    pathSnapshoot = hoveredObj[0].data.path;
                    break;
                case _config2.default.objectTypes.text:
                case _config2.default.objectTypes.circle:
                    pathSnapshoot = hoveredObj[0].data.center;
                    break;
                default:
            }
            pathSnapshoot = JSON.parse((0, _stringify2.default)(pathSnapshoot));

            pickupedObj = [{
                pathSnapshoot: pathSnapshoot,
                origin: hoveredObj[0]
            }];
            mousedownPos = (0, _scalelize.scaleReverse)([[e.pageX, e.pageY]], self.options.grid.scale)[0];
        } else {
            pickupedObj = [];
        }
        self.draw();
    });

    window.addEventListener('mousemove', function (e) {
        var x = 0;
        var y = 0;
        if (pickupedObj.length === 0) {
            x = e.offsetX;
            y = e.offsetY;

            var _scaleReverse$2 = (0, _slicedToArray3.default)((0, _scalelize.scaleReverse)([[x, y]], self.options.grid.scale)[0], 2);

            x = _scaleReverse$2[0];
            y = _scaleReverse$2[1];

            if (e.target !== canvas) {
                x = -999;
                y = -999;
            }
            var eventType = 'mousemove';
            hoveredObj = _match2.default.match([x, y], self.sys.objects, eventType);
        } else {
            if (mousedownPos.length > 0) {
                x = e.pageX;
                y = e.pageY;

                var _scaleReverse$3 = (0, _slicedToArray3.default)((0, _scalelize.scaleReverse)([[x, y]], self.options.grid.scale)[0], 2);

                x = _scaleReverse$3[0];
                y = _scaleReverse$3[1];

                var movedPos = [x - mousedownPos[0], y - mousedownPos[1]];
                movedPos = (0, _steplize2.default)(movedPos, step);
                var snapShootPath = pickupedObj[0].pathSnapshoot;
                var moveObject = pickupedObj[0].origin;
                if (moveObject.data.object.userSet.dragable) {
                    (0, _move2.default)(moveObject, snapShootPath, movedPos, step);
                }
            }
            e.preventDefault();
        }
        self.draw();
    });

    window.addEventListener('mouseup', function () {
        if (pickupedObj.length > 0) {
            pickupedObj[0].origin.data.object.emit('finish', {
                object: pickupedObj[0].origin.data,
                type: 'move'
            });
            // update
            var pathSnapshoot = void 0;
            switch (pickupedObj[0].origin.data.type) {
                case _config2.default.objectTypes.line:
                case _config2.default.objectTypes.polygon:
                    pathSnapshoot = pickupedObj[0].origin.data.path;
                    break;
                case _config2.default.objectTypes.text:
                case _config2.default.objectTypes.circle:
                    pathSnapshoot = pickupedObj[0].origin.data.center;
                    break;
                default:
            }
            pathSnapshoot = JSON.parse((0, _stringify2.default)(pathSnapshoot));
            pickupedObj[0].pathSnapshoot = pathSnapshoot;
        }
        // pickupedObj = [];
        hoveredObj = [];
        mousedownPos = [];
    });

    window.addEventListener('keydown', function (e) {
        if (pickupedObj.length > 0) {
            var order = 'update';
            var x = 0;
            var y = 0;
            var eventType = 'keydown';

            switch (e.keyCode) {
                case 9:
                    order = 'cancel';
                    var index = pickupedObj[0].origin.index;
                    if (index === undefined) {
                        index = -1;
                    }
                    if (e.shiftKey) {
                        index -= 1;
                    } else {
                        index += 1;
                    }
                    if (index > pickupedObj[0].origin.data.path.length - 1) {
                        index = 0;
                    }
                    if (index < 0) {
                        index = pickupedObj[0].origin.data.path.length - 1;
                    }
                    pickupedObj[0].origin.index = index;
                    pickupedObj[0].origin.type = 'point';
                    e.preventDefault();
                    break;
                case 8:
                    // delete
                    (0, _delete2.default)(pickupedObj[0]);
                    order = 'cancel';
                    // update active index  & reget the active
                    break;
                case 27:
                    // esc
                    pickupedObj = [];
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
            if (pickupedObj.length > 0) {
                var pathSnapshoot = void 0;
                switch (pickupedObj[0].origin.data.type) {
                    case _config2.default.objectTypes.line:
                    case _config2.default.objectTypes.polygon:
                        pathSnapshoot = pickupedObj[0].origin.data.path;
                        break;
                    case _config2.default.objectTypes.text:
                    case _config2.default.objectTypes.circle:
                        pathSnapshoot = pickupedObj[0].origin.data.center;
                        break;
                    default:
                }
                pathSnapshoot = JSON.parse((0, _stringify2.default)(pathSnapshoot));
                pickupedObj[0].pathSnapshoot = pathSnapshoot;
            }

            if (order === 'update') {
                var snapShootPath = pickupedObj[0].pathSnapshoot;
                var moveObject = pickupedObj[0].origin;
                (0, _move2.default)(moveObject, snapShootPath, [x * step, y * step], step);

                pickupedObj[0].origin.data.object.emit('finish', {
                    object: pickupedObj[0].origin.data,
                    type: 'move'
                });
                e.preventDefault();
            }
            self.draw();
        }
    });
};

exports.default = Event;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(112);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(115);

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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(42);
module.exports = __webpack_require__(114);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(57)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(20);
module.exports = __webpack_require__(0).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(42);
module.exports = __webpack_require__(117);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11)
  , get      = __webpack_require__(118);
module.exports = __webpack_require__(0).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(57)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(20);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _matchLine = __webpack_require__(120);

var _matchLine2 = _interopRequireDefault(_matchLine);

var _matchText = __webpack_require__(121);

var _matchText2 = _interopRequireDefault(_matchText);

var _matchCircle = __webpack_require__(122);

var _matchCircle2 = _interopRequireDefault(_matchCircle);

var _matchPolygon = __webpack_require__(123);

var _matchPolygon2 = _interopRequireDefault(_matchPolygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MathTool = {
    // eventType : mousedown/mousemove/keydown
    match: function match(P, datasGroup, eventType) {
        var res = [];

        datasGroup.forEach(function (datas) {
            switch (datas.type) {
                case _config2.default.objectTypes.line:
                    // for line
                    (0, _matchLine2.default)(P, datas, eventType, res);
                    break;
                case _config2.default.objectTypes.text:
                    (0, _matchText2.default)(P, datas, eventType, res);
                    break;
                case _config2.default.objectTypes.circle:
                    (0, _matchCircle2.default)(P, datas, eventType, res);
                    break;
                case _config2.default.objectTypes.polygon:
                    (0, _matchPolygon2.default)(P, datas, eventType, res);
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var matchLine = function matchLine(P, datas, eventType, res) {
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

            var userSet = datas.object.userSet;
            var bufferSize = userSet.bufferSize;
            // mouseOverEventEnable: false,
            // clickable: true,
            if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
                // res.length = 0;
            } else {
                if ((lPB < bufferSize || lAP < bufferSize) && datas.object.userSet.pointEditable) {
                    // pointEditable: when pointEditable is true, we push the active point to res
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
                    if (lPO < bufferSize) {
                        res.push({
                            type: 'object',
                            data: datas,
                            projection: O,
                            length: lPO
                        });
                    }
                }
                if (res.length > 0) {}
            }
        }
    });
};

exports.default = matchLine;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(17);

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

var matchText = function matchText(P, datas, eventType, res) {
    var useData = datas;
    useData.isActive = null;
    textCtx.beginPath();
    if (debug) {
        textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    }

    // offset
    var padding = [10, 10];

    (0, _keys2.default)(_config2.default.ctxStyleConfig).forEach(function (key) {
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
        var userSet = datas.object.userSet;
        // const bufferSize = userSet.bufferSize;
        // mouseOverEventEnable: false,
        // clickable: true,
        if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
            // res.length = 0;
        } else {
            res.push({
                data: datas,
                projection: P,
                length: Math.sqrt(Math.pow(P[0] - datas.center[0], 2), Math.pow(P[1] - datas.center[1], 2))
            });
        }
    }
    textCtx.restore();
};

exports.default = matchText;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var matchCircle = function matchCircle(P, datas, eventType, res) {
    var useData = datas;
    useData.isActive = null;
    var userSet = datas.object.userSet;
    var bufferSize = userSet.bufferSize;

    var lPC = Math.sqrt(Math.pow(P[0] - datas.center[0], 2) + Math.pow(P[1] - datas.center[1], 2));
    if (lPC <= datas.redius + bufferSize) {
        if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
            // res.length = 0;
        } else {
            res.push({
                data: datas,
                length: lPC
            });
        }
    }
};

exports.default = matchCircle;

/***/ }),
/* 123 */
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

var matchPolygon = function matchPolygon(P, datas, eventType, res) {
    // console.log()
    var useData = datas;
    useData.isActive = null;

    var userSet = datas.object.userSet;
    var bufferSize = userSet.bufferSize;

    ctx.beginPath();
    // object
    var outBox = datas.sys.outBox;

    if (P[0] < outBox.xMin - bufferSize || P[0] > outBox.xMax + bufferSize) {
        return false;
    }
    if (P[1] < outBox.yMin - bufferSize || P[1] > outBox.yMax + bufferSize) {
        return false;
    }
    // mouseOverEventEnable: false,
    // clickable: true,
    if (eventType === 'mousemove' && !userSet.mouseOverEventEnable || eventType === 'mousedown' && !userSet.clickable) {
        // res.length = 0;
    } else {

        datas.path.forEach(function (item, index) {
            if (index === 0) {
                ctx.moveTo(item[0], item[1]);
            } else {
                ctx.lineTo(item[0], item[1]);
            }
            // get the length of P and O
            var lPO = Math.sqrt(Math.pow(P[0] - item[0], 2) + Math.pow(P[1] - item[1], 2));
            // console.log(lPO);
            if (lPO < bufferSize && datas.object.userSet.pointEditable) {
                // pointEditable: when pointEditable is true, we push the active point to res
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
    }

    return res;
};

exports.default = matchPolygon;

/***/ }),
/* 124 */
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(15);

var _stringify2 = _interopRequireDefault(_stringify);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _steplize = __webpack_require__(16);

var _steplize2 = _interopRequireDefault(_steplize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file this file is countrol the move the object
 */

var move = function move(moveObject, snapShootPath, movedPos, step) {
    switch (moveObject.data.type) {
        case _config2.default.objectTypes.polygon:
        case _config2.default.objectTypes.line:
            var newPath = [];
            var isMoveSingle = moveObject.type === 'point' && moveObject.length < 10;
            if (isMoveSingle) {
                var singleIndex = moveObject.index;
                var path = moveObject.data.path;
                path[singleIndex][0] = snapShootPath[singleIndex][0] + movedPos[0];
                path[singleIndex][1] = snapShootPath[singleIndex][1] + movedPos[1];
                path[singleIndex] = (0, _steplize2.default)(path[singleIndex], step);
                // emit
                moveObject.data.object.emit('change', {
                    type: 'point',
                    index: singleIndex,
                    changeData: JSON.parse((0, _stringify2.default)(path[singleIndex])),
                    object: moveObject.data
                });
            } else {
                newPath = snapShootPath.map(function (item) {
                    var x = item[0];
                    var y = item[1];
                    x += movedPos[0];
                    y += movedPos[1];
                    return (0, _steplize2.default)([x, y], step);
                });
                moveObject.data.path = newPath;
                // emit
                moveObject.data.object.emit('change', {
                    type: 'line',
                    changeData: newPath,
                    object: moveObject.data
                });
            }
            // update outBox
            var sys = moveObject.data.sys;
            var outBox = {
                xMin: Infinity,
                xMax: -Infinity,
                yMin: Infinity,
                yMax: -Infinity
            };
            newPath = moveObject.data.path;
            newPath.forEach(function (point) {
                outBox.xMin = Math.min(outBox.xMin, point[0]);
                outBox.xMax = Math.max(outBox.xMax, point[0]);
                outBox.yMin = Math.min(outBox.yMin, point[1]);
                outBox.yMax = Math.max(outBox.yMax, point[1]);
            });
            sys.outBox = outBox;
            break;
        case _config2.default.objectTypes.text:
        case _config2.default.objectTypes.circle:
            moveObject.data.center = [snapShootPath[0] + movedPos[0], snapShootPath[1] + movedPos[1]];
            moveObject.data.object.emit('change', {
                object: moveObject.data
            });
            break;
        default:
    }
};

exports.default = move;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteObject = function deleteObject(object) {
    // let candelete = object.origin
    var deleteObj = object.origin.data.object;
    var candelete = true;
    if (deleteObj.listens.willDeletePoint) {
        candelete = deleteObj.listens.willDeletePoint({
            object: object.origin.data,
            index: object.origin.index
        }) !== false;
    }

    var minPoint = object.origin.data.type === _config2.default.objectTypes.polygon ? 3 : 2;
    if (candelete) {
        if (object.origin.type === 'point' && object.origin.data.path.length > minPoint) {
            object.origin.data.path.splice(object.origin.index, 1);
            if (object.origin.index > object.origin.data.path.length - 1) {
                object.origin.index--;
            }
        } else {
            object.origin.type = 'object';
        }
    }
};

exports.default = deleteObject;

/***/ })
/******/ ]);