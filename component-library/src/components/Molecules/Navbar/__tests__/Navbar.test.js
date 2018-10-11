import React from 'react';
import Navbar from '../Navbar.js';
import navbarTheme from '../themes/Navbar.default.scss';

describe('<Navbar />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<Navbar theme={navbarTheme} />);
    expect(wrapper.find('Navbar')).toHaveLength(1);
  });
});
