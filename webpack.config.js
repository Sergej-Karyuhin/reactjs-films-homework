const devConfig = require('./config/webpack/webpack.dev.config');
const prodConfig = require('./config/webpack/webpack.prod.config');

module.exports = (env) => (env === 'production') ? prodConfig : devConfig;
