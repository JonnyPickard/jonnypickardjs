// @flow

import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import MainPage from '../Pages/MainPage';
import ProjectDetailPage from '../Pages/ProjectDetailPage';

import {
  WithViewport,
  withViewportThemeDefault
} from '@jonnypickardjs/withviewport';

import styles from './App.scss';

/**
 * <App /> component.
 */
class App extends Component<*, *> {
  state: Object = {};

  setViewportSize = viewport => {
    const { viewportSize } = this.state;

    // Only triggers a re render if the vp size is different
    if (viewportSize !== viewport) {
      this.setState({ viewportSize: viewport });
    }
  };

  render(): Element<*> {
    return (
      <div className={styles.appContainer}>
        <WithViewport
          theme={withViewportThemeDefault}
          getViewport={this.setViewportSize}
        >
          <Switch>
            <Route exact path="/" component={MainPage} />,
            <Route path="/projects/:title" component={ProjectDetailPage} />
          </Switch>
        </WithViewport>
      </div>
    );
  }
}

export default withRouter(App);
