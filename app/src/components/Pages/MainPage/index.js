// @flow

import React, { Component } from 'react';

import {
  HeroSection,
  heroSectionThemeDefault
} from '@jonnypickardjs/herosection';
import { Navbar, navbarThemeDefault } from '@jonnypickardjs/navbar';

import ProjectCardList from '../../Fragments/ProjectCardList/ProjectCardList';

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
        <HeroSection
          theme={heroSectionThemeDefault}
          {...heroSectionProps}
          extendStyle={styles.mainPageHeroSection}
        />
        <ProjectCardList />
      </div>
    );
  }
}

export default MainPage;
