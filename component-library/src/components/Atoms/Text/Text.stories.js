import React from 'react';
import loremIpsum from 'lorem-ipsum';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered';
import { Text, textThemeDefault } from '.';

const containerStyles = {
  padding: 50
};

storiesOf('Atoms/Text', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('default', () => {
    const props = {
      theme: textThemeDefault,
      textType: select('Text Type', ['body', 'note', 'description'], 'body'),
      content: loremIpsum({ count: 10 }),
      isItalic: boolean('isItalic', false),
      isBold: boolean('isBold', false),
      isUnderlined: boolean('isUnderlined', false),
      isInline: boolean('isInline', false)
    };

    return (
      <div style={containerStyles}>
        <Text {...props} />
      </div>
    );
  });
