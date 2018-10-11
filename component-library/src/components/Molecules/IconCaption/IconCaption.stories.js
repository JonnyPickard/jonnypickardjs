import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import icons from 'assets/icons/icons.svg';
import iconNames from 'assets/icons/iconNames.js';
import { iconOptions } from 'shared/storybook-helpers/iconOptions.js';
import colors from 'src/style/colors/colorSelectors';

import { IconCaption, iconCaptionThemeDefault } from '.';

const sizes = ['xs', 'sm', 'md', 'lg', 'xlg'];

storiesOf('Molecules/IconCaption', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('default', () => {
    const color = select('Color', colors, 'linkedinBlue', 'Icon-01');
    const iconName = select(
      'Icon name',
      iconOptions,
      `${icons}#${iconNames[0]}`,
      'Icon-01'
    );
    const iconSize = select('Icon size', sizes, 'md', 'Icon-01');
    const captionText = text('Caption Text', 'Linkedin');
    const captionSize = select(
      'Caption Size',
      ['h2', 'h3', 'h4', 'h5', 'h6'],
      'h2'
    );

    return (
      <IconCaption
        captionText={captionText}
        captionSize={captionSize}
        iconColor={color}
        iconName={iconName}
        iconSize={iconSize}
        theme={iconCaptionThemeDefault}
      />
    );
  });