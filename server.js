import express from 'express';
import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server'; // https://react.dev/reference/react-dom/server/renderToString
import { StaticRouter } from 'react-router-dom/server';  // static equivalent to CSR BrowserRouter
  //https://stackoverflow.com/a/71884426/1180721

//import { Home } from './src/pages/Home'; // no default means curlies
import App from './src/App';  // 'export default App;' means no curlies

global.window = {}; // suppress window undefined error for React components

const app = express();
// leverage output folder for static serving
app.use(express.static('./build', { index: false }));

const articles = [
  { title: 'Alpha', author: 'Apple', content: 'lorem ipsum delorem est...'},
  { title: 'Bravo', author: 'Bat', content: 'lorem ipsum delorem est...'},
  { title: 'Charlie', author: 'Cat', content: 'lorem ipsum delorem est...'},
];
app.get('/api/articles', (request, response) => {
  const data = articles;  // pretend to be DB lookup
  response.json(data);
});

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

    // pass articles to the app/front-end <Articles useEffect
    const ssrLoad = `<script>window.preloadedArticles = ${ JSON.stringify(articles) };</script>`;
    return response.send(
      data.replace('<div id="root"></div>', `${ssrLoad}<div id="root">${html}</div>`)
    );
  });
});

app.listen(3001, () => {
  console.log('server is listening on port 3001:  http://localhost:3001');
});
