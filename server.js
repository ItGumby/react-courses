import express from 'express';
import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server'; // https://react.dev/reference/react-dom/server/renderToString
import { StaticRouter } from 'react-router-dom/server';  // static equivalent to CSR BrowserRouter
  //https://stackoverflow.com/a/71884426/1180721

//import { Home } from './src/pages/Home'; // no default means curlies
import App from './src/App';  // 'export default App;' means no curlies

const app = express();
// leverage output folder for static serving
app.use(express.static('./build', { index: false }));

app.get('/*', (request, response) => {

  console.dir({'app': App, 'static': StaticRouter});
  const html = renderToString(
    <StaticRouter location={request.url} context={{}}>
      <App />
    </StaticRouter>
  );
  // const html = '<p>my para</p>';

  /*
  return response.send(
    `<html><body><h1>static SSR</h1>${html}</body></html>`
  );
  */

  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf8', (err, data) => {
    if (err) {
      return response.status(500).send(err);
    }

    return response.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.listen(3001, () => {
  console.log('server is listening on port 3001:  http://localhost:3001');
});
