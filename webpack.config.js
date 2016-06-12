const path = require('path');
var webpack = require('webpack');
var config;
var APP_PATH = path.join(__dirname, 'src');
var validate = require('webpack-validator');

config = {
  entry: {
    app: APP_PATH,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      }
    ]
  }
}

module.exports = validate(config);
