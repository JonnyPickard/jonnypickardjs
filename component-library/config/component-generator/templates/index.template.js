const { uncapitalize } = require('./helpers');

module.exports = componentName => `\
  import ${componentName} from './${componentName}';
  import ${uncapitalize(
    componentName
  )}ThemeDefault from './themes/${componentName}.default.scss';

  export {
    ${componentName},
    ${uncapitalize(componentName)}ThemeDefault
  };
`;
