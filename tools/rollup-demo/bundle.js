'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var lodash = _interopDefault(require('lodash'));

var index = 42;

// import { version } from '../package.json';
// export default function() {
//     console.log('version ' + version);
//     console.log('the answer is ' + answer);
// }
var main = (function () {
    console.log('the answer is ' + index);
});

module.exports = main;
