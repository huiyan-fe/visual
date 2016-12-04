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

	var _visualCanvas = __webpack_require__(3);

	var _visualCanvas2 = _interopRequireDefault(_visualCanvas);

	var _visualMath = __webpack_require__(4);

	var _visualMath2 = _interopRequireDefault(_visualMath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Visual = function () {
	  function Visual(canvas, datas, config) {
	    _classCallCheck(this, Visual);

	    var conf = config || Array.isArray(datas) ? {} : datas;
	    var data = Array.isArray(datas) ? datas : [];

	    this._ = {};
	    this._.canvas = canvas;
	    var ctx = this._.ctx = canvas.getContext('2d');
	    _visualCanvas2.default.adjust(ctx);
	    this.config = new _visualConfig2.default(conf);
	    this.data = new _visualData2.default(data, this);
	    this.sysData = {};
	    //
	    this.draw();
	    //
	    this.initEvent();
	  }

	  _createClass(Visual, [{
	    key: 'initEvent',
	    value: function initEvent() {
	      var _this = this;

	      var canvas = this._.canvas;

	      var emit = function emit(type, data) {
	        var vEvents = _this._.events && _this._.events[type];
	        Object.keys(vEvents).forEach(function (id) {
	          if (vEvents[id]) {
	            vEvents[id](data);
	          }
	        });
	      };

	      canvas.addEventListener('mousemove', function (e) {
	        var ctx = _this._.ctx;
	        var data = _this.data.get();
	        var match = _visualMath2.default.match([e.offsetX, e.offsetY], data);
	        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	        //
	        if (match.length >= 1) {
	          var matchInfo = match[0];
	          var point = match[0].projection;

	          emit('mousemove', {
	            point: point,
	            length: matchInfo.length,
	            data: matchInfo.data
	          });

	          _this.sysData.lineProjection = [{
	            type: Visual.circle,
	            points: [point]
	          }];
	        } else {
	          _this.sysData.lineProjection = [];
	        }
	        //
	        _this.draw();
	      });

	      canvas.addEventListener('mouseleave', function () {
	        console.log('ml');
	      });

	      canvas.addEventListener('click', function (e) {
	        var ctx = _this._.ctx;
	        var data = _this.data.get();
	        var match = _visualMath2.default.match([e.offsetX, e.offsetY], data);
	        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	        if (match.length >= 1) {
	          var matchInfo = match[0];
	          var point = match[0].projection;

	          _this.sysData.lineProjection = [{
	            type: Visual.circle,
	            points: [point]
	          }];
	          //
	          emit('click', {
	            point: point,
	            length: matchInfo.length,
	            data: matchInfo.data
	          });
	        } else {
	          delete _this.sysData.lineProjection;
	        }

	        //
	        _this.draw();
	      });
	    }
	  }, {
	    key: 'on',
	    value: function on(key, event) {
	      this._.eventID = this._.eventID || 0;
	      this._.eventID += 1;
	      var id = this._.eventID;
	      this._.events = this._.events || {};
	      this._.events[key] = this._.events[key] || {};
	      this._.events[key][id] = event;
	      return id;
	    }
	  }, {
	    key: 'unbind',
	    value: function unbind(id) {
	      var vEvents = this._.events;
	      Object.keys(vEvents).forEach(function (key) {
	        var theEvents = vEvents[key];
	        Object.keys(theEvents).forEach(function (eventId) {
	          if (eventId === id) {
	            delete vEvents[key][id];
	          }
	        });
	      });
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var _this2 = this;

	      var drawFn = function drawFn(theData) {
	        switch (theData.type) {
	          case Visual.line:
	            _visualCanvas2.default.drawLine(_this2._.ctx, theData.paths);
	            break;
	          case Visual.circle:
	            _visualCanvas2.default.drawPoint(_this2._.ctx, theData.points);
	            break;
	          default:
	        }
	      };
	      //
	      var data = this.data.get();
	      data.forEach(drawFn);
	      //
	      var sysData = this.sysData;
	      Object.keys(sysData).forEach(function (key) {
	        sysData[key].forEach(drawFn);
	      });
	    }
	  }]);

	  return Visual;
	}();

	Visual.line = Symbol('line');
	Visual.circle = Symbol('circle');

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
	  }, {
	    key: "set",
	    value: function set(data) {
	      this.data = data;
	    }
	  }]);

	  return Data;
	}();

	exports.default = Data;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Canvas = {
	  drawLine: function drawLine(ctxParam, data, config) {
	    var ctx = ctxParam;
	    ctx.save();
	    // config
	    ctx.lineWidth = 4;
	    ctx.lineJoin = 'round';
	    ctx.strokeStyle = '#f8ce60';
	    //
	    ctx.beginPath();
	    data.forEach(function (point, index) {
	      if (index === 0) {
	        ctx.moveTo(point[0], point[1]);
	      } else {
	        ctx.lineTo(point[0], point[1]);
	      }
	    });
	    ctx.stroke();
	    ctx.restore();
	  },
	  drawPoint: function drawPoint(ctxParam, data) {
	    var ctx = ctxParam;
	    data.forEach(function (point) {
	      ctx.beginPath();
	      ctx.arc(point[0], point[1], 4, 0, 2 * Math.PI);
	      ctx.lineWidth = 4;
	      ctx.fillStyle = 'white';
	      ctx.stroke();
	      ctx.fill();
	    });
	  },
	  adjust: function adjust(cctxParam) {
	    var ctx = cctxParam;
	    var backingStore = ctx.backingStorePixelRatio || 1;
	    var pixelRatio = (window.devicePixelRatio || 1) / backingStore;
	    var canvasWidth = getComputedStyle(ctx.canvas).width;
	    var canvasHeight = getComputedStyle(ctx.canvas).height;
	    ctx.canvas.width = parseInt(canvasWidth, 10) * pixelRatio;
	    ctx.canvas.height = parseInt(canvasHeight, 10) * pixelRatio;
	    ctx.canvas.style.width = canvasWidth;
	    ctx.canvas.style.height = canvasHeight;
	    ctx.scale(pixelRatio, pixelRatio);
	  }
	};

	exports.default = Canvas;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MathTool = {
	  match: function match(P, datasGroup) {
	    var res = [];
	    datasGroup.forEach(function (datas) {
	      datas.paths.forEach(function (data, index) {
	        if (index !== 0) {
	          var A = datas.paths[index - 1];
	          var B = datas.paths[index];
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

	          if (rPAB < Math.PI / 2 && rPBA < Math.PI / 2) {
	            var lAO = Math.cos(rPAB) * lAP;
	            var pAOAB = lAO / lAB;
	            var lPO = Math.sin(rPAB) * lAP;
	            var O = [A[0] + vAB[0] * pAOAB, A[1] + vAB[1] * pAOAB];
	            if (lPO < 30) {
	              res.push({
	                data: datas,
	                projection: O,
	                length: lPO
	              });
	            }
	          }
	          //
	          if (lPB < 30) {
	            res.push({
	              data: datas,
	              projection: B,
	              length: lPB
	            });
	          }

	          if (lAP < 30) {
	            res.push({
	              data: datas,
	              projection: A,
	              length: lAP
	            });
	          }
	        }
	      });
	    });
	    res.sort(function (a, b) {
	      return a.length - b.length;
	    });
	    return res;
	  }
	};

	exports.default = MathTool;

/***/ }
/******/ ]);