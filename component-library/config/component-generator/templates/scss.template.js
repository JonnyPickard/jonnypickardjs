const { uncapitalize } = require('./helpers');

module.exports = componentName => `\
@import 'src/style/variables.scss';

.${uncapitalize(componentName)} {}
`;
