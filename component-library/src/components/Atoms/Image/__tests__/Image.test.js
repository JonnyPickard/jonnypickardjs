import React from 'react';
import Image from '../Image.js';

describe('<Image />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<Image />);
    expect(wrapper.find('Image')).toHaveLength(1);
  });
});
