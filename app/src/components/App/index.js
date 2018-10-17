// @flow
import React, { Component } from 'react';

import './App.scss';

import icons from '@jonnypickardjs/assets/icons/icons.svg';

import loremIpsum from 'lorem-ipsum';

// import { Divider, dividerThemeDefault } from '@jonnypickardjs/divider';
// import { Heading, headingThemeDefault } from '@jonnypickardjs/heading';
// import { Icon, iconThemeDefault } from '@jonnypickardjs/icon';
import {
  ProjectCard,
  projectCardThemeDefault
} from '@jonnypickardjs/projectcard';

import {
  HeroSection,
  heroSectionThemeDefault
} from '@jonnypickardjs/herosection';

const projectCardProps = {
  theme: projectCardThemeDefault,
  projectTitle: 'Whatcar?',
  projectImage: {
    src: 'http://via.placeholder.com/280x280',
    alt: 'Project Image'
  }
};

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
  heroSubtitle: 'Software Engineer',
  heroLinks: [
    {
      iconName: `${icons}#social-linkedin`,
      iconSize: 'md',
      iconColor: 'linkedinBlue',
      captionSize: 'h2',
      captionText: 'Linkedin',
      href: 'https://www.linkedin.com/in/jonny-pickard-715049b6/'
    },
    {
      iconName: `${icons}#social-github`,
      iconSize: 'md',
      iconColor: 'black',
      captionSize: 'h2',
      captionText: 'Github',
      href: 'https://github.com/JonnyPickard'
    }
  ]
};

/**
 * <App /> component.
 */
class App extends Component<*, *> {
  render(): Element<*> {
    console.log(`icons`, icons);

    return (
      <div>
        <HeroSection
          {...heroSectionProps}
          heroBlurb={loremIpsum({ count: 10 })}
        />

        <ProjectCard {...projectCardProps} />
      </div>
    );
  }
}

export default App;
