const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const merge = require('webpack-merge');
// const validate = require('webpack-validator');
const parts = require('./libs/parts');


const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};


// module.exports = { 


const commonConfig = {

    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    entry: {
        app: PATHS.app,
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
        }),
    ],
};


const productionConfig = () => commonConfig;

const developmentConfig = () => {
    const config = {
        devServer: {
            // Enable history API fallback so HTML5 History API based
            // routing works. Good for complex setups.
            historyApiFallback: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',

            // Parse host and port from env to allow customization.
            //
            // If you use Docker, Vagrant or Cloud9, set
            // host: options.host || '0.0.0.0';
            //
            // 0.0.0.0 is available to all network devices
            // unlike default `localhost`.
            host: process.env.HOST, // Defaults to `localhost`
            port: process.env.PORT, // Defaults to 8080
            // overlay: true is equivalent
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    enforce: 'pre',

                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                    },
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                },
            ],
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    eslint: {
                        // Fail only on errors
                        failOnWarning: false,
                        failOnError: true,

                        // Toggle autofix
                        fix: false,

                        // Output to Jenkins compatible XML
                        outputReport: {
                            filePath: 'checkstyle.xml',
                            formatter: require('eslint/lib/formatters/checkstyle'),
                        },
                    },
                },
            }),
        ],
    };

    return Object.assign({},
        commonConfig,
        config
    );
};

module.exports = (env) => {

    if (env === 'production') {
        return productionConfig();
    }

    return developmentConfig();

};