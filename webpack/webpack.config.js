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
        filename: '[chunkhash].bundle.js',
        pathinfo: true,
        // publicPath 被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值
        publicPath: "https://cdn.example.com/assets/",
    },
    module: {
        rules: [{
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.(png|jpg|jpge|svg|gif)$/,
                loader: 'url-loader?limit=10'
            }
        ]
    }
}