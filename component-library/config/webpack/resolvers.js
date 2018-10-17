const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.resolve(__dirname, '../../src/components'),
      path.resolve(__dirname, '../../src'),
      path.resolve(__dirname, '../../'), // Root
      'node_modules'
    ]
  }
};
