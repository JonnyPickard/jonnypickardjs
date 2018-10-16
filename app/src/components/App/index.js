// @flow
import React, { Component } from 'react';

import './App.scss';

import icons from '@jonnypickardjs/assets/icons/icons.svg';

// import { Divider, dividerThemeDefault } from '@jonnypickardjs/divider';
// import { Heading, headingThemeDefault } from '@jonnypickardjs/heading';
// import { Icon, iconThemeDefault } from '@jonnypickardjs/icon';
import {
  HeroSection,
  heroSectionThemeDefault
} from '@jonnypickardjs/herosection';

const heroSectionProps = {
  theme: heroSectionThemeDefault,
  heroImage: {
    src: 'http://via.placeholder.com/140x200',
    alt: 'Profile Image'
  },
  heroImageMobile: {
    src: 'http://via.placeholder.com/200x200',
    alt: 'Profile Image'
  },
  heroTitle: 'Jonny Pickard',
  heroSubtitle: 'Software Engineer'
};

/**
 * <App /> component.
 */
class App extends Component<*, *> {
  render(): Element<*> {
    console.log(`icons`, icons);

    return (
      <div>
        <h1>Hello from App!</h1>
        {/* <Divider dividerSize="xs" theme={dividerThemeDefault} />
        <Heading theme={headingThemeDefault} content="hello" />
        <Icon theme={iconThemeDefault} iconName={`${icons}#social-linkedin`} /> */}
        <HeroSection {...heroSectionProps} />
      </div>
    );
  }
}

export default App;
