import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import { HeroSection, heroSectionThemeDefault } from '.';

const props = {
  theme: heroSectionThemeDefault
};

storiesOf('Organisms/HeroSection', module)
  .addDecorator(withKnobs)
  .add('default', () => <HeroSection {...props} />);
