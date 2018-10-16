// @flow
import React, { Component } from 'react';

import { Divider, dividerThemeDefault } from '@jonnypickardjs/divider';

/**
 * <App /> component.
 */
class App extends Component<*, *> {
  render(): Element<*> {
    return (
      <div>
        <h1>Hello from App!</h1>
        <Divider dividerSize="xs" theme={dividerThemeDefault} />
      </div>
    );
  }
}

export default App;
