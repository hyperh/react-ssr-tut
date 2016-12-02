import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config.dev-client';

const render = require('../dist/assets/SSR');
const app = express();

const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.get('/', render.default);

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
