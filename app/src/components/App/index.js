// @flow

import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setViewport } from './App.actions';

import MainPage from '../Pages/MainPage';
import ProjectDetailPage from '../Pages/ProjectDetailPage';

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

  setViewport = viewport => {
    // Only reset state if viewport size has changed
    if (this.props.viewportSize !== viewport) {
      this.props.setViewport(viewport);
    }
  };

  render() {
    return (
      <div>
        <WithViewport
          theme={withViewportThemeDefault}
          getViewport={this.setViewport}
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

export default withRouter(connect(App.mapStateToProps, { setViewport })(App));
