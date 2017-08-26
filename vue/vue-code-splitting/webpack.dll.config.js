const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        vendor: ['vue', 'jquery']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-mainifest.json'),
            name: '[name]_library'
        })
    ]
}