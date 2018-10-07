import React from 'react';
import HeroSection from '../HeroSection.js';
import heroSectionTheme from '../themes/HeroSection.default.scss';

describe('<HeroSection />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<HeroSection theme={heroSectionTheme} />);
    expect(wrapper.find('HeroSection')).toHaveLength(1);
  });
});
