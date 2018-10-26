// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { WithLink, withLinkThemeDefault } from '.';

const props = {
  theme: withLinkThemeDefault,
  href: 'http://example.com'
};

storiesOf('HOC/WithLink', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <WithLink {...props} noStyling={boolean('Without Styling?', true)}>
      <h1>Hello World!</h1>
    </WithLink>
  ));
