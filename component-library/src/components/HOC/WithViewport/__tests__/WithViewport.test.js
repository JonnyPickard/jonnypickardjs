import React from 'react';
import WithViewport from '../WithViewport.js';
import withViewportTheme from '../themes/WithViewport.default.scss';

import viewportSizes from '@jonnypickardjs/theme/mediaQueries.js';

describe('<WithViewport />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<WithViewport theme={withViewportTheme} />);
    expect(wrapper.find('WithViewport')).toHaveLength(1);
  });

  it('should attach and detach resize events', () => {
    const spyAddEventListener = jest.spyOn(window, 'addEventListener');
    const spyRemoveEventListener = jest.spyOn(window, 'removeEventListener');

    const wrapper = mount(<WithViewport theme={withViewportTheme} />);

    expect(spyAddEventListener).toHaveBeenCalledWith(
      'resize',
      wrapper.instance().getViewportSize
    );

    wrapper.unmount();

    expect(spyRemoveEventListener).toHaveBeenCalled();
  });

  describe('Screen width detection', () => {
    beforeAll(() => {
      // Spy on setRef but also stop it from setting one
      jest.spyOn(WithViewport.prototype, 'setRef').mockImplementation();
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    for (let screenSize of Object.keys(viewportSizes)) {
      it(`[${screenSize}] - sets the right viewport for the screen width & returns it with the getViewport prop`, () => {
        const getViewport = jest.fn().mockImplementation(viewport => viewport);

        const spyGetViewportSize = jest.spyOn(
          WithViewport.prototype,
          'getViewportSize'
        );

        // Set span ref.getBoundingClientRect() to return correct device width
        WithViewport.prototype.Node = {
          getBoundingClientRect: () => ({ width: viewportSizes[screenSize] })
        };

        const wrapper = mount(
          <WithViewport getViewport={getViewport} theme={withViewportTheme} />
        );

        expect(spyGetViewportSize).toHaveBeenCalled();
        expect(getViewport).toHaveBeenCalledWith(screenSize);

        expect(wrapper.instance().ViewportSize).toEqual(`${screenSize}`);
      });
    }
  });
});
