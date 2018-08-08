const loaders = require('../config/webpack/loaders');
const resolvers = require('../config/webpack/resolvers');

module.exports = {
  module: loaders.module,
  resolve: resolvers.resolve
};
