const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config/webpack/webpack.dev.config');

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
} else {
  app.use(express.static('build'));
}

app.listen(3000, () => {
  console.log(`Application is listening on port ${PORT}`);
});
