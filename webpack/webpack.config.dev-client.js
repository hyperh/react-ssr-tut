const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  name: 'client',
  context: path.join(__dirname, '..', 'app'),  
  entry: './client.js',
  output: {
    path: assetsPath,
    publicPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?module&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ]),
  },
};
