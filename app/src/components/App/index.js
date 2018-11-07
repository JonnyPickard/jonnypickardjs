// @flow

import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './App.scss';

import { setViewport } from './App.actions';

import MainPage from '../Pages/MainPage/MainPage.js';
import ProjectDetailPage from '../Pages/ProjectDetailPage';

import { Navbar, navbarThemeDefault } from '@jonnypickardjs/navbar';

import content from '@jonnypickardjs/content';

import {
  WithViewport,
  withViewportThemeDefault
} from '@jonnypickardjs/withviewport';

/**
 * <App /> component.
 */
class App extends Component<*, *> {
  static mapStateToProps(state: Object) {
    return {
      viewportSize: state.app.viewportSize
    };
  }

  setViewport = (viewport: string) => {
    // Only reset state if viewport size has changed
    if (this.props.viewportSize !== viewport) {
      this.props.setViewport(viewport);
    }
  };

  render() {
    const {
      navbarContent: { navbarProps }
    } = content;

    const {
      viewportSize,
      location: { pathname }
    } = this.props;

    // If on mainPage/ Home Page don't show navbar
    const showNavbar = viewportSize === 'mobile' || pathname !== '/';

    return (
      <div>
        <WithViewport
          theme={withViewportThemeDefault}
          getViewport={this.setViewport}
        >
          {showNavbar && (
            <Navbar
              theme={navbarThemeDefault}
              {...navbarProps}
              extendStyle={styles.appNavBar}
            />
          )}
          <Switch>
            <Route exact path="/" component={MainPage} />,
            <Route path="/projects/:title" component={ProjectDetailPage} />
          </Switch>
        </WithViewport>
      </div>
    );
  }
}

export default withRouter(connect(App.mapStateToProps, { setViewport })(App));
