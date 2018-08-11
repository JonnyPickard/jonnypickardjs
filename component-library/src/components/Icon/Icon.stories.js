import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import icons from 'assets/icons/icons.svg';
import iconNames from 'assets/icons/iconNames.js';

import { Icon, iconThemeDefault } from '.';

const iconOptions = iconNames.reduce((optionsObject, iconName) => {
  optionsObject[`${icons}#${iconName}`] = iconName;

  return optionsObject;
}, {});

const colors = [
  'greyscaleColor1',
  'greyscaleColor2',
  'greyscaleColor3',
  'greyscaleColor4',
  'greyscaleColor5',
  'black',
  'white',
  'linkedinBlue'
];

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const color = select('Color', colors, 'primaryColor1', 'Icon-01');
    const iconName = select(
      'Icon name',
      iconOptions,
      `${icons}#${iconNames[0]}`,
      'Icon-01'
    );
    return <Icon color={color} iconName={iconName} theme={iconThemeDefault} />;
  });
