const { uncapitalize } = require('./helpers');

module.exports = componentName => `\
import React from 'react';

import {
  storiesOf
} from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';


import { ${componentName}, ${uncapitalize(
  componentName
)}ThemeDefault } from '.';

const props = {
  theme: ${uncapitalize(componentName)}ThemeDefault
}

storiesOf('${componentName}', module).addDecorator(withKnobs).add('default', () => ( <${componentName} { ...props} />));
`;
