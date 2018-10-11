import React from 'react';
import Navbar from '../Navbar.js';
import navbarTheme from '../themes/Navbar.default.scss';

const props = {
  theme: navbarTheme,
  profilePhoto: {
    src: 'http://via.placeholder.com/200x200',
    alt: 'Profile Image'
  },
  navbarTitle: {
    text: 'Jonny Pickard',
    size: 'h3'
  },
  socialIcons: [
    {
      iconName: 'testIconName',
      iconSize: 'md',
      iconColor: 'linkedinBlue',
      href: 'http://example.com'
    },
    {
      iconName: 'testIconName2',
      iconSize: 'md',
      iconColor: 'linkedinBlue',
      href: 'http://example.com'
    }
  ]
};

describe('<Navbar />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<Navbar {...props} theme={navbarTheme} />);
    expect(wrapper.find('Navbar')).toHaveLength(1);
  });
});
