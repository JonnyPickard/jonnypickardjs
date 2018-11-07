// @flow

import React, { Component } from 'react';

import {
  HeroSection,
  heroSectionThemeDefault
} from '@jonnypickardjs/herosection';

import ProjectCardListSection from '../../Fragments/ProjectCardListSection/ProjectCardListSection';

import content from '@jonnypickardjs/content';

import styles from './MainPage.scss';

/**
 * <MainPage /> component.
 */
class MainPage extends Component<*, *> {
  static mapStateToProps = (state: Object) => {
    return {
      viewportSize: state.app.viewportSize
    };
  };

  render() {
    const {
      mainPageContent: { heroSectionProps }
    } = content;

    return (
      <div className={styles.mainPage}>
        <HeroSection
          theme={heroSectionThemeDefault}
          {...heroSectionProps}
          extendStyle={styles.mainPageHeroSection}
        />
        <ProjectCardListSection projectCardListSectionTitle="Work" />
      </div>
    );
  }
}

export default MainPage;
