import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import icons from '@jonnypickardjs/assets/icons/icons.svg';
import iconNames from '@jonnypickardjs/assets/icons/iconNames.js';
import { iconOptions } from '@jonnypickardjs/clib-shared/storybook-helpers/iconOptions.js';
import colors from '@jonnypickardjs/theme/colors/colorSelectors';

import { Icon, iconThemeDefault } from '.';

const sizes = ['xs', 'sm', 'md', 'lg', 'xlg'];

storiesOf('Atoms/Icon', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('default', () => {
    const color = select('Color', colors, 'grayscaleColor5', 'Icon-01');
    const backgroundColor = select(
      'Background Color',
      colors,
      'white',
      'Icon-01'
    );
    const backgroundBorderRadius = boolean('Background Border Radius', false);
    const iconName = select(
      'Icon name',
      iconOptions,
      `${icons}#${iconNames[0]}`,
      'Icon-01'
    );
    const iconSize = select('Icon size', sizes, 'md', 'Icon-01');

    return (
      <Icon
        color={color}
        backgroundColor={backgroundColor}
        backgroundBorderRadius={backgroundBorderRadius}
        iconName={iconName}
        iconSize={iconSize}
        theme={iconThemeDefault}
      />
    );
  });
