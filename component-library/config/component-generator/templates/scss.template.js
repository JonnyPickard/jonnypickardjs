const { uncapitalize } = require('./helpers');

module.exports = componentName => `\
@import '@jonnypickardjs/theme/variables.scss';

// .${uncapitalize(componentName)} {}
`;
