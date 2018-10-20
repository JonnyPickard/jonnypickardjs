// @flow

import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import {
  HeroSection,
  heroSectionThemeDefault
} from '@jonnypickardjs/herosection';

import content from '@jonnypickardjs/content';

import './MainPage.scss';

/**
 * <MainPage /> component.
 */
class MainPage extends Component<*, *> {
  render(): Element<*> {
    const {
      mainPageContent: { heroSectionProps }
    } = content;

    return (
      <Fragment>
        <HeroSection theme={heroSectionThemeDefault} {...heroSectionProps} />
        <Link to="/projects/testProject1">Test Project</Link>
      </Fragment>
    );
  }
}

export default MainPage;
