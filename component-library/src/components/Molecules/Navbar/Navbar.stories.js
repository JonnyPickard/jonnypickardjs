import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import icons from 'assets/icons/icons.svg';
import iconNames from 'assets/icons/iconNames.js';
import { iconOptions } from 'shared/storybook-helpers/iconOptions.js';
import colors from 'src/style/colors/colorSelectors';

import { Navbar, navbarThemeDefault } from '.';

const sizes = ['xs', 'sm', 'md', 'lg', 'xlg'];

const navbarIcons = () => [
  {
    iconName: select(
      'Icon name 01',
      iconOptions,
      `${icons}#${iconNames[1]}`,
      'Socials-01'
    ),
    iconSize: select('Icon size 01', sizes, 'md', 'Socials-01'),
    iconColor: select('Icon Color 01', colors, 'black', 'Socials-01'),
    href: 'https://github.com/JonnyPickard'
  },
  {
    iconName: select(
      'Icon name 02',
      iconOptions,
      `${icons}#${iconNames[0]}`,
      'Socials-02'
    ),
    iconSize: select('Icon size 02', sizes, 'md', 'Socials-02'),
    iconColor: select('Icon Color 02', colors, 'linkedinBlue', 'Socials-02'),
    href: 'https://www.linkedin.com/in/jonny-pickard-715049b6/'
  }
];

const props = {
  theme: navbarThemeDefault,
  profilePhoto: {
    src: 'http://via.placeholder.com/200x200',
    alt: 'Navbar Profile Photo'
  },
  navbarTitle: {
    size: 'h3',
    text: 'Jonny Pickard'
  }
};

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .add('default', () => <Navbar socialIcons={navbarIcons()} {...props} />);
