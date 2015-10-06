var path = require('path');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    entry: [],
    output: {
        path: path.resolve(__dirname, '../app/assets/dashboard'),
        filename: '[name]-bundle.js',
        publicPath: 'http://localhost:8080/static/'
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
