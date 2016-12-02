import express from 'express';
import webpack from 'webpack';

const render = require('../dist/assets/SSR');
const app = express();

app.get('/', render.default);

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
