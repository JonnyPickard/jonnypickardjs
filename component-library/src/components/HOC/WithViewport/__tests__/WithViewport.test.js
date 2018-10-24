import React from 'react';
import WithViewport from '../WithViewport.js';
import withViewportTheme from '../themes/WithViewport.default.scss';

describe('<WithViewport />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<WithViewport theme={withViewportTheme} />);
    expect(wrapper.find('WithViewport')).toHaveLength(1);
  });
});
