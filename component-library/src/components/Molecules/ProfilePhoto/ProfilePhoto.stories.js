import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import { ProfilePhoto, profilePhotoThemeDefault } from '.';
import centered from '@storybook/addon-centered';

const sizes = ['xs', 'sm', 'md', 'lg', 'xlg'];

storiesOf('Molecules/ProfilePhoto', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('default', () => {
    const props = {
      theme: profilePhotoThemeDefault,
      proPhotoSize: select('Profile Photo Size', sizes, 'md'),
      src: 'http://via.placeholder.com/200x200',
      alt: 'Profile Photo Alt'
    };
    return <ProfilePhoto {...props} />;
  });
