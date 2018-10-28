// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash.get';

import {
  ProjectCard,
  projectCardThemeDefault
} from '@jonnypickardjs/projectcard';
import { WithLink, withLinkThemeDefault } from '@jonnypickardjs/withlink';

import content from '@jonnypickardjs/content';

import styles from './ProjectCardList.scss';

/**
 * <ProjectCardList /> component.
 */
class ProjectCardList extends Component<*, *> {
  render() {
    const {
      mainPageContent: {
        workProjectsSection: { workProjectsContent }
      }
    } = content;

    return (
      <div className={styles.projectCardList}>
        {workProjectsContent.map((content, index) => {
          const projectUrlTitle = get(content, ['projectUrlTitle']);
          const projectImage = get(content, ['projectImage']);
          const projectTitle = get(content, ['projectTitle']);

          if (!projectUrlTitle || !projectImage || !projectTitle) {
            return null;
          }

          return (
            <WithLink
              extendStyle={styles.projectCardListCard}
              key={`work-project-card-${index}`}
              theme={withLinkThemeDefault}
              ReactRouterLink={Link}
              href={`/projects/${projectUrlTitle}`}
              noStyling
            >
              <ProjectCard
                theme={projectCardThemeDefault}
                hasScaleEffect
                projectImage={projectImage}
                projectTitle={projectTitle}
              />
            </WithLink>
          );
        })}
      </div>
    );
  }
}

export default ProjectCardList;
