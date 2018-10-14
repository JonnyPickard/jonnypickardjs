import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import { TableSimple, tableSimpleThemeDefault } from '.';

const props = {
  theme: tableSimpleThemeDefault
};

storiesOf('TableSimple', module)
  .addDecorator(withKnobs)
  .add('default', () => <TableSimple {...props} />);
