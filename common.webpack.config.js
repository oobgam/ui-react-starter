var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: [],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: []
    },
    externals: [],
    plugins: [
        new HtmlWebpackPlugin()
    ],
    postcss: function () {
        return [autoprefixer];
    }
};

module.exports = config;
