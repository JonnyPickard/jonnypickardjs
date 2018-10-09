import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import icons from 'assets/icons/icons.svg';
import iconNames from 'assets/icons/iconNames.js';
import { iconOptions } from 'shared/storybook-helpers/iconOptions.js';
import colors from 'src/style/colors/colorSelectors';

import loremIpsum from 'lorem-ipsum';

import { HeroSection, heroSectionThemeDefault } from '.';

const sizes = ['xs', 'sm', 'md', 'lg', 'xlg'];

const heroLinks = () => [
  {
    iconName: select(
      'Icon name 01',
      iconOptions,
      `${icons}#${iconNames[0]}`,
      'Socials-01'
    ),
    iconSize: select('Icon size 01', sizes, 'md', 'Socials-01'),
    iconColor: select('Icon Color 01', colors, 'linkedinBlue', 'Socials-01'),
    captionSize: select(
      'Caption Size 01',
      ['h2', 'h3', 'h4', 'h5', 'h6'],
      'h2',
      'Socials-01'
    ),
    captionText: text('Caption Text 01', 'Linkedin', 'Socials-01'),
    href: 'https://www.linkedin.com/in/jonny-pickard-715049b6/'
  },
  {
    iconName: select(
      'Icon name 02',
      iconOptions,
      `${icons}#${iconNames[1]}`,
      'Socials-02'
    ),
    iconSize: select('Icon size 02', sizes, 'md', 'Socials-02'),
    iconColor: select('Icon Color 02', colors, 'black', 'Socials-02'),
    captionSize: select(
      'Caption Size 02',
      ['h2', 'h3', 'h4', 'h5', 'h6'],
      'h2',
      'Socials-02'
    ),
    captionText: text('Caption Text 02', 'Github', 'Socials-02'),
    href: 'https://github.com/JonnyPickard'
  }
];

const props = {
  theme: heroSectionThemeDefault,
  heroImage: {
    src: 'http://via.placeholder.com/140x200',
    alt: 'Profile Image'
  },
  heroTitle: 'Jonny Pickard',
  heroSubtitle: 'Software Engineer',
  heroBlurb: loremIpsum({ count: 10 })
};

const storyStyle = {
  padding: '30px 10px',
  margin: 10,
  borderRadius: 5
};

storiesOf('Organisms/HeroSection', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      <h1 style={{ textAlign: 'center', background: '#e2e2e2' }}>
        Desktop/ Tablet Only
      </h1>
      <div style={storyStyle}>
        <HeroSection {...props} heroLinks={heroLinks()} />
      </div>
    </div>
  ));
