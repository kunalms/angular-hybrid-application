/**
 * This file creates a production build of angularJS code, However the code is not minified or mangled unlike Angular's
 * prod build because it leads to breakages in the overall build.
 */
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var BUILD_DIR = './app/dist';

var ENV = 'production';

module.exports = {
    entry: {
        'ng1-vendor': './app/vendor.ts',
        'ng1-main': './app/main.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, BUILD_DIR)
    },
    resolve: {
        // Add '.ts' and '.js' as a resolvable extension.
        extensions: ['.ts', '.js']
    },
    module: {
        // this block specifies what loaders should be used when a file for specific format is encountered by webpack
        // while traversing through the project
        rules: [
            // for images
            {
                test: /\.(png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            // for css files
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            // all files with a '.ts' extension will be handled by 'awesome-typescript-loader and 'angular2-template-loader''
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    mode: ENV,
    devtool: false,
    plugins: [
        // specifies the format in which the css files should be outputted.
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output.
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ]
};
