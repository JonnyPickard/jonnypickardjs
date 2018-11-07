// @flow

import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

import './ProjectDetailPage.scss';

/**
 * <ProjectDetailPage /> component.
 */
class ProjectDetailPage extends Component<*, *> {
  render() {
    return (
      <div>
        <h1>Hello From ProjectDetailPage</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default withRouter(ProjectDetailPage);
