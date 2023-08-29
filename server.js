import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();
app.get('/*', (request, response) => {
  const reactApp = renderToString(
    <h1>Hello from SSR!</h1>
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
