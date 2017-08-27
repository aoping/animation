const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host, // Defaults to `localhost`
        port, // Defaults to 8080
        overlay: {
            errors: true,
            warnings: true,
        },
    },
});

exports.lintJavaScript = ({ include, exclude, options }) => ({
    module: {
        rules: [{
            test: /\.js$/,
            include,
            exclude,
            enforce: 'pre',

            loader: 'eslint-loader',
            options,
        }, ],
    },
});
exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
        rules: [{
                test: /\.css$/,
                include,
                exclude,
                loaders: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => ([
                                require('autoprefixer'),
                                require('precss'),
                            ]),
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
});

exports.extractCSS = ({ include, exclude, use }) => {
    // Output extracted CSS to a file
    const plugin = new ExtractTextPlugin({
        filename: '[name].css',
    });

    return {
        module: {
            rules: [{
                test: /\.css$/,
                include,
                exclude,

                use: plugin.extract({
                    use,
                    fallback: 'style-loader',
                }),
            }, ],
        },
        plugins: [plugin],
    };
};