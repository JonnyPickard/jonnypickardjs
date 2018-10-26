// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Image } from '@jonnypickardjs/image';
import { Text, textThemeDefault as textTheme } from '@jonnypickardjs/text';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  projectImage: {
    src: string,
    alt: string
  },
  projectTitle: string,
  extendStyle?: string
};

/**
 * ProjectCard Component
 */
class ProjectCard extends PureComponent<Props> {
  static displayName = 'ProjectCard';

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const {
      theme: {
        projectCardImageSection,
        projectCardTitleSection,
        projectCard,
        projectCardWithScaleEffect
      },
      projectImage,
      projectTitle,
      hasScaleEffect,
      extendStyle
    } = this.props;

    return (
      <div
        className={classNames(
          projectCard,
          hasScaleEffect && projectCardWithScaleEffect,
          extendStyle
        )}
      >
        <div className={projectCardImageSection}>
          <Image {...projectImage} />
        </div>
        <div className={projectCardTitleSection}>
          <Text theme={textTheme} content={projectTitle} />
        </div>
      </div>
    );
  }
}

export default ProjectCard;
