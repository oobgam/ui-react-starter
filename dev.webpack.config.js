var path = require('path');
var webpack = require('webpack');

var config = require('./common.webpack.config');

config.entry.push(
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
);

config.output.filename = 'dashboard-bundle.js';

config.devtool = 'eval';

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

config.module.loaders.push(
    {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
    },
    {
        test: /\.(css|scss)$/,
        loader: 'style!css!sass!postcss'
    },
    {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
    }
);

module.exports = config;
