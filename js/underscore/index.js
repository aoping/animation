const _ = require('./underscore')

// var underscore = _.noConflict();
// var score = underscore.map([1, 2, 3], function(item) {
//     return item * 2
// })
// console.log(score)

var results = _.map([1, 2, 3], function(elem) {
    return elem * 2;
}); // => [2,4,6]




console.log(results)