const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@jonnypickardjs': path.resolve(__dirname, '../../src/components')
    }
  },
  modules: [path.resolve(__dirname, '../../src/components'), 'node_modules']
};
