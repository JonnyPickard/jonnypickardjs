// @flow

import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
  HeroSection,
  heroSectionThemeDefault
} from '@jonnypickardjs/herosection';
import { Navbar, navbarThemeDefault } from '@jonnypickardjs/navbar';

import content from '@jonnypickardjs/content';

import styles from './MainPage.scss';

/**
 * <MainPage /> component.
 */
class MainPage extends Component<*, *> {
  render() {
    const {
      mainPageContent: { heroSectionProps },
      navbarContent: { navbarProps }
    } = content;

    return (
      <div className={styles.mainPage}>
        <Navbar theme={navbarThemeDefault} {...navbarProps} />
        <HeroSection theme={heroSectionThemeDefault} {...heroSectionProps} />
        <Link to="/projects/testProject1">Test Project</Link>
      </div>
    );
  }
}

export default MainPage;
