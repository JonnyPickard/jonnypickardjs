import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';

import { WithViewport, withViewportThemeDefault } from '.';

const store = new Store({
  viewportSize: 'hello'
});

const props = {
  theme: withViewportThemeDefault
};

const infoBlockStyle = {
  padding: 10,
  margin: 10,
  borderRadius: 5,
  background: '#F8F8F8'
};

storiesOf('HOC/WithViewport', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      // This is just a block of information about the component
      <div style={{ textAlign: 'center' }}>
        <div style={infoBlockStyle}>
          <h2>Viewport Detector</h2>
          <h4>
            Alter screen width to see the state change. Or use the storybook{' '}
            {"'Viewport'"} addon below
          </h4>
        </div>

        {/* This is the actual component usage */}
        <WithViewport
          {...props}
          /**
            This function (getViewport) is where the magic happens
            the WithViewport component tracks screen resizing and returns 'mobile' | 'tablet' | 'desktop'
            based on the width of the container its used in & the media queries found at 
            @jonnypickardjs/theme/mediaQueries.js.

            Then the returned value can be used to set the viewportSize state &
            rerender the component.
           */
          getViewport={viewportSize => store.set({ viewportSize })}
        >
          <State store={store}>
            {state => (
              <h1 style={{ padding: 10, background: '#99FFE1' }}>
                {state.viewportSize}
              </h1>
            )}
          </State>
        </WithViewport>
      </div>
    );
  });
