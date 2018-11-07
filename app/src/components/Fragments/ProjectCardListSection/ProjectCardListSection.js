// @flow

import React, { PureComponent } from 'react';

import { Heading, headingThemeDefault } from '@jonnypickardjs/heading';
import { Divider, dividerThemeDefault } from '@jonnypickardjs/divider';

import ProjectCardList from '../ProjectCardList/ProjectCardList';

import styles from './ProjectCardListSection.scss';

type Props = {
  projectCardListSectionTitle: string
};

/**
 * <ProjectCardListSection /> component.
 */
class ProjectCardListSection extends PureComponent<Props> {
  static mapStateToProps = (state: Object) => {
    return {
      viewportSize: state.app.viewportSize
    };
  };

  render() {
    const { projectCardListSectionTitle } = this.props;

    return (
      <div className={styles.projectCardListSection}>
        <Heading
          headingType="h2"
          theme={headingThemeDefault}
          content={projectCardListSectionTitle}
          extendStyle={styles.projectCardListSectionHeading}
        />
        {/* Mobile only Divider */}
        <Divider
          theme={dividerThemeDefault}
          extendStyle={styles.projectCardListSectionDivider}
          dividerColor="grayscaleColor2"
          withShadow
        />
        <ProjectCardList extendStyle={styles.projectCardListSectionCardList} />
        {/* > Tablet only Divider */}
        <Divider
          theme={dividerThemeDefault}
          dividerColor="grayscaleColor2"
          extendStyle={styles.projectCardListSectionNonMobileDivider}
          withShadow
        />
      </div>
    );
  }
}

export default ProjectCardListSection;
