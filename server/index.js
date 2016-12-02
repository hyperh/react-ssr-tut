import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app/components/App';
import template from '../app/template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const appString = renderToString(<App />);

  res.send(template({
    body: appString,
    title: 'FROM THE SERVER'
  }));
});

const port = 3000;
server.listen(port);
console.log(`Listening on port ${port}`);