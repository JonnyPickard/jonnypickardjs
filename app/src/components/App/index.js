// @flow

import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import MainPage from '../Pages/MainPage';
import ProjectDetailPage from '../Pages/ProjectDetailPage';

import content from '@jonnypickardjs/content';

import styles from './App.scss';

/**
 * <App /> component.
 */
class App extends Component<*, *> {
  render(): Element<*> {
    return (
      <div className={styles.appContainer}>
        <Switch>
          <Route exact path="/" component={MainPage} />,
          <Route path="/projects/:title" component={ProjectDetailPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
