// @flow

import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import content from '@jonnypickardjs/content';

import './ProjectDetailPage.scss';

/**
 * <ProjectDetailPage /> component.
 */
class ProjectDetailPage extends Component<*, *> {
  render(): Element<*> {
    return (
      <div>
        <h1>Hello From ProjectDetailPage</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default ProjectDetailPage;
