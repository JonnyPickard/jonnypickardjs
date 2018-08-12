import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import colors from 'src/style/colors/colorSelectors';

import { Divider, dividerThemeDefault } from '.';

const containerStyle = {
  padding: 50,
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

storiesOf('Atoms/Divider', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const props = {
      theme: dividerThemeDefault,
      axis: select('axis', ['vertical', 'horizontal'], 'horizontal'),
      dividerSize: select('Divider Size', ['xs', 'sm', 'md'], 'xs'),
      dividerColor: select('Color', colors, 'grayscaleColor5')
    };

    return (
      <div style={containerStyle}>
        <Divider {...props} />
      </div>
    );
  });
