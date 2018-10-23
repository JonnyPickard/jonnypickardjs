import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered';

import {
  Image
  // imageThemeDefault
} from '.';

const props = {
  // theme: imageThemeDefault,
  src: 'https://via.placeholder.com/200x200',
  alt: 'Image Alt'
};

storiesOf('Atoms/Image', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('default', () => <Image {...props} />);
