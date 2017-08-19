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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['i am ', ',', ''], ['i am ', ',', '']),
    _templateObject2 = _taggedTemplateLiteral(['Hi\n', ''], ['Hi\\n', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// {
//     console.log('a', '\u0061');
//     console.log('s', '\u20BB7');
//     console.log('X', '\u{1F680}' === '\uD83D\uDE80');

//     console.log('a', `\u0061`);
//     console.log('s', `\u20BB7`);
//     console.log('s', `\u{20BB7}`);
// }


// {
//     let s = '𠮷';
//     console.log('length', s.length);
//     console.log('0', s.charAt(0));
//     console.log('1', s.charAt(1));
//     console.log('at0', s.charCodeAt(0));
//     console.log('at1', s.charCodeAt(1));

//     let s1 = '𠮷a';
//     console.log('length', s1.length);
//     console.log('code0', s1.codePointAt(0));
//     console.log('code0', s1.codePointAt(0).toString(16));
//     console.log('code1', s1.codePointAt(1));
//     console.log('code2', s1.codePointAt(2));
// }

// {
//     console.log(String.fromCharCode("0x20bb7"));
//     console.log(String.fromCodePoint("0x20bb7"));
// }

// {
//     let str = '\u{20bb7}abc';
//     for (let i = 0; i < str.length; i++) {
//         console.log('es5', str[i]);
//     }
//     for (let code of str) {
//         console.log('es6', code);
//     }
// }

// {
//     let str = "string";
//     console.log('includes', str.includes("c"));
//     console.log('start', str.startsWith('str'));
//     console.log('end', str.endsWith('ng'));
// }

// {
//     let str = "abc";
//     console.log(str.repeat(2));
// }

// {
//     let name = "list";
//     let info = "hello world";
//     let m = `i am ${name},${info}`;
//     console.log(m);
// }

// {
//     console.log('1'.padStart(2, '0'));
//     console.log('1'.padEnd(2, '0'));
// }

{
    var abc = function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return s + v1 + v2;
    };

    var user = {
        name: 'list',
        info: 'hello world'
    };
    console.log(abc(_templateObject, user.name, user.info));
}

{
    console.log(String.raw(_templateObject2, 1 + 2));
    console.log('Hi\n' + (1 + 2));
}

/***/ })
/******/ ]);