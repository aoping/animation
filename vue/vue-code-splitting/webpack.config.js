let path = require('path')
module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js',
        publicPath: 'dist/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: ['babel-loader']
            },
            {
                test: /\.vue$/,
                loader: ['vue-loader']
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
        },
        extensions: ['.vue', '.js']
    }
}