'use strict';
const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    context: __dirname + '/app',
    entry: './App.js',
    output: {
        filename: 'public/bundle.js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
		      test: /\.js?$/,
		      exclude: /(node_modules)/,
		      loaders: ['react-hot', 'babel']
 	        }
        ]
    }
};

module.exports = webpackConfig;
