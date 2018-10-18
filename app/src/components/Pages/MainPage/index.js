// @flow

import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import content from '@jonnypickardjs/content';

import './MainPage.scss';

/**
 * <MainPage /> component.
 */
class MainPage extends Component<*, *> {
  render(): Element<*> {
    return (
      <div>
        <h1>Hello From MainPage</h1>
        <Link to="/projects/testProject1">Test Project</Link>
      </div>
    );
  }
}

export default MainPage;
