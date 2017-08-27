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
        ],
        // 不解析jQuery，加快打包速度
        noParse: function(content) {
            return /jquery|lodash/.test(content);
        }
    },
    resolve: {
        // 取别名， 精简路径
        alias: {
            css: path.resolve(__dirname, './css'),
            img: path.resolve(__dirname, './img'),
            // jquery$: 'jquery',
            // jquery$: path.resolve(__dirname, './jquery'),
        },
        // 可以省略的扩展名
        extensions: ['.js', '.json'],
        // 告诉 webpack 解析模块时应该搜索的目录
        modules: ["node_modules"]
    },
    devtool: 'eval'
}