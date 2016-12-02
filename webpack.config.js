const path = require('path');

module.exports = {
  name: 'SSR',
  entry: './app/SSR',
  output: {
    path: path.join(__dirname, '.', 'dist', 'assets'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath: '/assets/',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, '.', 'app'),
        exclude: path.join(__dirname, '.', 'node_modules'),
      },
    ],
  },
  resolve: {
    root: [path.join(__dirname, '..', 'app')],
    extensions: ['', '.js', '.jsx'],
  },
};
