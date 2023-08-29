import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Home } from './src/pages/Home';

const app = express();
// leverage output folder for static serving
app.use(express.static('./build', { index: false }));

app.get('/*', (request, response) => {
  const reactApp = renderToString(
    <Home />
  );

  return response.send(`
    <html>
      <body>
        <div id="root">${reactApp}</div>
      </body>
    </html>`);
});

app.listen(3001, () => {
  console.log('server is listening on port 3001:  http://localhost:3001');
});
