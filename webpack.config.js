"use strict";
let webpack = require('webpack')
let path = require('path');

module.exports  = {
  entry: __dirname + '\\src\\app.js',
  output: { filename: __dirname + '\\src\\bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
