import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import icons from 'assets/icons/icons.svg';
import iconNames from 'assets/icons/iconNames.js';
import { iconOptions } from 'shared/storybook-helpers/iconOptions.js';
import colors from 'style/colors/colorSelectors';

import { Icon, iconThemeDefault } from '.';

const sizes = ['xs', 'sm', 'md', 'lg', 'xlg'];

storiesOf('Atoms/Icon', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('default', () => {
    const color = select('Color', colors, 'grayscaleColor5', 'Icon-01');
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
        iconName={iconName}
        iconSize={iconSize}
        theme={iconThemeDefault}
      />
    );
  });
