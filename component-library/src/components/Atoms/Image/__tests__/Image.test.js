import React from 'react';
import Image from '../Image.js';

const props = {
  src: 'https://via.placeholder.com/200x200',
  alt: 'Image Alt'
};

describe('<Image />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<Image {...props} />);
    expect(wrapper.find('Image')).toHaveLength(1);
  });
});
