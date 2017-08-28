'use strict';

var index = 42;

// import { version } from '../package.json';
var main = function() {
    console.log('version ' + version);
    console.log('the answer is ' + index);
};

module.exports = main;
