'use strict';
const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    context: __dirname + '/src',
    entry: './App.js',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'bundle.js'
    },

    devtool: 'source-map',

    module: {
  		rules: [
        {
    			test: /\.js$/,
    			use: [
            {
              loader: 'babel-loader'
            }
          ]
  		  },
        {
    			test: /\.(png|jpg|gif)$/,
    			use: [
            {
              loader: 'url-loader?limit=10000&name=images/[hash:12].[ext]'
            }
          ]
  		  },
        {
    			test: /\.css$/,
    			use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader",
                options: {
                  modules: true
                }
            }
          ]
  		  }
      ]
  	},
    devServer: {
        historyApiFallback: true,
        inline:true,
        port: 9000
    }
};

module.exports = webpackConfig;
