/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _visualConfig = __webpack_require__(1);

	var _visualConfig2 = _interopRequireDefault(_visualConfig);

	var _visualData = __webpack_require__(2);

	var _visualData2 = _interopRequireDefault(_visualData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Visual = function () {
	  function Visual(canvas, datas, config) {
	    _classCallCheck(this, Visual);

	    var conf = config || Array.isArray(datas) ? {} : datas;
	    var data = Array.isArray(datas) ? datas : [];

	    this._ = {};
	    this._.canvas = canvas;
	    this._.ctx = canvas.getContext('2d');

	    this.config = new _visualConfig2.default(conf);
	    this.data = new _visualData2.default(data);
	    this.initEvent();
	  }

	  _createClass(Visual, [{
	    key: 'initEvent',
	    value: function initEvent() {
	      var _this = this;

	      var canvas = this._.canvas;
	      canvas.addEventListener('mousemove', function () {
	        _this.update();
	      });
	      canvas.addEventListener('mouseleave', function () {
	        console.log('ml');
	      });
	      canvas.addEventListener('click', function () {
	        console.log('ck');
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var ctx = this._.ctx;
	      var data = this.data.get();
	      console.log(ctx, data);
	    }
	  }]);

	  return Visual;
	}();

	global.Visual = Visual;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Config = function Config() {
	  _classCallCheck(this, Config);
	};

	exports.default = Config;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Data interface
	 * [
	 *  {
	 *    data:[[x, y],[x, y]],
	 *    enable: true,
	 *    action: Data.pick
	 *  }
	 * ]
	 */
	var Data = function () {
	  function Data(data) {
	    _classCallCheck(this, Data);

	    this.data = data || [];
	  }

	  _createClass(Data, [{
	    key: "get",
	    value: function get() {
	      return this.data;
	    }
	  }]);

	  return Data;
	}();

	exports.default = Data;

/***/ }
/******/ ]);