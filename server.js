const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config/webpack/webpack.dev.config');
const open = require('open');
const path = require('path');

const app = express();
const compiler = webpack(config);

const PORT = 3000;

if (process.env.NODE_ENV === 'development') {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }),
  );
  app.use(webpackHotMiddleware(compiler));
  app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, '/index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      return res.end();
    });
  });
}

else {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
  });
}

app.listen(PORT, () => {
  open(`http://localhost:${PORT}`);
});
