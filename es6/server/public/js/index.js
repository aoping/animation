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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

{
    var a = void 0,
        b = void 0,
        rest = void 0;
    a = 1;
    b = 2;
    rest = [3, 4, 5];

    console.log(a, b, rest);
}

{
    var _a = void 0,
        _b = void 0;
    var _a$b = { a: 1, b: 2 };
    _a = _a$b.a;
    _b = _a$b.b;

    console.log(_a, _b);
}

{
    var _a2 = void 0,
        _b2 = void 0,
        c = void 0;
    // 前后个数不一样
    var _ref = [1, 2];
    _a2 = _ref[0];
    _b2 = _ref[1];
    var _ref$ = _ref[2];
    c = _ref$ === undefined ? 3 : _ref$;
    console.log(_a2, _b2, c);
}
// 交换
{
    var _a3 = 1,
        _b3 = 2;
    var _ref2 = [_b3, _a3];
    _a3 = _ref2[0];
    _b3 = _ref2[1];

    console.log(_a3, _b3);
}
// 接受返回值
{
    var f = function f() {
        return [1, 2];
    };

    var _a4 = void 0,
        _b4 = void 0;

    var _f = f();

    var _f2 = _slicedToArray(_f, 2);

    _a4 = _f2[0];
    _b4 = _f2[1];

    console.log(_a4, _b4);
}
// 选择性的接收返回值
{
    var _f3 = function _f3() {
        return [1, 2, 3, 4, 5];
    };

    var _a5 = void 0,
        _b5 = void 0,
        _c = void 0;

    var _f4 = _f3();

    var _f5 = _slicedToArray(_f4, 4);

    _a5 = _f5[0];
    _b5 = _f5[3];

    console.log(_a5, _b5);
}
// 
{
    var _f6 = function _f6() {
        return [1, 2, 3, 4, 5];
    };

    var _a6 = void 0,
        _b6 = void 0,
        _c2 = void 0;

    var _f7 = _f6();

    var _f8 = _toArray(_f7);

    _a6 = _f8[0];
    _b6 = _f8.slice(1);

    console.log(_a6, _b6);
}

// 对象解构赋值
{
    var o = { p: 1, q: 2 };
    var p = o.p,
        q = o.q;

    console.log(p, q);
}
// 对象解构赋值
{
    var _p2 = { p: 1 },
        _p2$p = _p2.p,
        _p = _p2$p === undefined ? 3 : _p2$p,
        _p2$q = _p2.q,
        _q = _p2$q === undefined ? 4 : _p2$q;

    console.log(_p, _q);
}
// 对象解构赋值
{
    var metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'xxx'
        }]
    };

    var _p3 = metaData.title,
        _metaData$test = _slicedToArray(metaData.test, 1),
        _q2 = _metaData$test[0].title;

    console.log(_p3, _q2);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function test() {
    var a = 2;
    console.log(a);
}

test();

/***/ })
/******/ ]);