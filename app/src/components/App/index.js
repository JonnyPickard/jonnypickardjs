// @flow
import React, { Component } from 'react';

import './App.scss';

import { Divider, dividerThemeDefault } from '@jonnypickardjs/divider';
import { Heading, headingThemeDefault } from '@jonnypickardjs/heading';

/**
 * <App /> component.
 */
class App extends Component<*, *> {
  render(): Element<*> {
    return (
      <div>
        <h1>Hello from App!</h1>
        <Divider dividerSize="xs" theme={dividerThemeDefault} />
        <Heading theme={headingThemeDefault} content="hello" />
      </div>
    );
  }
}

export default App;
