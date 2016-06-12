const path = require('path');
var webpack = require('webpack');
var config;
var APP_PATH = path.join(__dirname, 'src');

config = {
  entry: {
    app: APP_PATH,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
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

module.exports = config;
