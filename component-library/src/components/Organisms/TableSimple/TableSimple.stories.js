import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import colors from 'style/colors/colorSelectors';

import { TableSimple, tableSimpleThemeDefault } from '.';

const props = () => ({
  theme: tableSimpleThemeDefault,
  cells: [
    {
      text: 'Javascript',
      color: select('Background Color - Cell 1', colors, 'mintHeavy')
    },
    {
      text: 'React',
      color: select('Background Color - Cell 2', colors, 'mintHeavy')
    },
    {
      text: 'Flow Types',
      color: select('Background Color - Cell 3', colors, 'mintHeavy')
    },
    {
      text: 'Jest',
      color: select('Background Color - Cell 4', colors, 'mintMedium')
    },
    {
      text: 'Docker',
      color: select('Background Color - Cell 5', colors, 'mintLight')
    }
  ],
  tableKey: [
    {
      text: 'Light',
      color: select('Background Color - Key 1', colors, 'mintLight')
    },
    {
      text: 'Moderate',
      color: select('Background Color - Key 2', colors, 'mintMedium')
    },
    {
      text: 'Heavy',
      color: select('Background Color - Key 3', colors, 'mintHeavy')
    }
  ],
  tableKeyTitle: 'Usage'
});

storiesOf('Organisms/TableSimple', module)
  .addDecorator(withKnobs)
  .add('default', () => <TableSimple {...props()} />);
