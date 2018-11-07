// @flow

import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import classNames from 'classnames';

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
  heroSectionRef: ?HTMLDivElement;
  heroSectionRefHeight: number;

  static mapStateToProps = (state: Object) => {
    return {
      viewportSize: state.app.viewportSize
    };
  };

  constructor() {
    super();

    this.state = {
      fixedHero: false
    };
  }

  componentDidMount() {
    if (this.heroSectionRef) {
      this.heroSectionRefHeight = this.heroSectionRef.clientHeight;
      window.addEventListener('scroll', this.setFixedHero());
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setFixedHero());
  }

  // Set a fixed hero on scroll past hero height
  setFixedHero = () =>
    debounce(() => {
      if (
        this.heroSectionRefHeight &&
        window.pageYOffset >= this.heroSectionRefHeight
      ) {
        this.setState({ fixedHero: true });
      } else if (
        this.heroSectionRefHeight &&
        window.pageYOffset <= this.heroSectionRefHeight
      ) {
        this.setState({ fixedHero: false });
      }
    }, 150);

  setRef = (ref: ?HTMLDivElement) => {
    this.heroSectionRef = ref;
  };

  render() {
    const {
      mainPageContent: { heroSectionProps }
    } = content;

    return (
      <div className={styles.mainPage}>
        <div ref={this.setRef}>
          <HeroSection
            theme={heroSectionThemeDefault}
            {...heroSectionProps}
            extendStyle={classNames(
              styles.mainPageHeroSection,
              this.state.fixedHero && styles.mainPageHeroSectionFixed
            )}
          />
        </div>
        <ProjectCardListSection projectCardListSectionTitle="Work" />
        <ProjectCardListSection projectCardListSectionTitle="Work" />
      </div>
    );
  }
}

export default MainPage;
