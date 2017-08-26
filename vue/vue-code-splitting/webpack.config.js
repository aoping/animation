let path = require('path')
let webpack = require('webpack')
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
                loaders: ['babel-loader?cacheDirectory'],
                include: [
                    path.resolve(__dirname, './src')
                ],
                exclude: path.resolve(__dirname, './node_modules/')
            },
            {
                test: /\.vue$/,
                loaders: ['vue-loader']
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
        },
        extensions: ['.vue', '.js']
    },
    // 报错时是定位到源码还是编译后的代码
    // devtool: 'eval',
    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require("./dist/vendor-mainifest.json"),
        }),
    ]
}