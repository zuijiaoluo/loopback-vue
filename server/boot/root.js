'use strict';

const fs = require('fs');
const path = require('path');
const vueServerRenderer = require('vue-server-renderer');

// Server-Side Bundle File
const serverBundleFilePath = path.join(__dirname, '../../dist/bundle.server.js')
const serverBundleFileCode = fs.readFileSync(serverBundleFilePath, 'utf8');

const bundleRenderer = vueServerRenderer.createBundleRenderer(serverBundleFileCode);

// Client-Side Bundle File
const clientBundleFilePath = path.join(__dirname, '../../dist/bundle.client.js');
const clientBundleFileUrl = '/bundle.client.js';

module.exports = function(server) {
  const router = server.loopback.Router();
  router.get('/', function(req, res) {
    bundleRenderer.renderToString((err, html) => {
      if (err){
        res.status(500).send(`
        <h1>Error: ${err.message}</h1>
        <pre>${err.stack}</pre>
      `);
      } else {
        res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Loopback Vue</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
          </head>
          <body>
            ${html}
            <script src="${clientBundleFileUrl}"></script>
          </body>
        </html>`);
      }
    });
  });
  server.use(router);
};
