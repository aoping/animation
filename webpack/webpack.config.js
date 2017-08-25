let path = require('path')
module.exports = {
    entry: path.resolve(__dirname, './main.js'),
    // TODOS: webpack缓存
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: 'dist.js'
        // filename: '[name].bundle.js'
        // filename: '[id].bundle.js'
        // filename: '[name].[hash].bundle.js'
        filename: '[chunkhash].bundle.js'
    }
}