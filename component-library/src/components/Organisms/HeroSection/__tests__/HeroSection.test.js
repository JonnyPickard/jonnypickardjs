import React from 'react';
import HeroSection from '../HeroSection.js';
import heroSectionTheme from '../themes/HeroSection.default.scss';

import loremIpsum from 'lorem-ipsum';

const props = {
  heroImage: {
    src: 'http://via.placeholder.com/140x200',
    alt: 'Profile Image'
  },
  heroImageMobile: {
    src: 'http://via.placeholder.com/200x200',
    alt: 'Profile Image'
  },
  heroTitle: 'Jonny Pickard',
  heroSubtitle: 'Software Engineer',
  heroBlurb: loremIpsum({ count: 10 }),
  heroLinks: [
    {
      iconName: 'testIconName',
      iconSize: 'md',
      iconColor: 'linkedinBlue',
      captionSize: 'h2',
      captionText: 'testCaption',
      href: 'http://example.com'
    }
  ]
};

describe('<HeroSection />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<HeroSection {...props} theme={heroSectionTheme} />);
    expect(wrapper.find('HeroSection')).toHaveLength(1);
  });

  it('has the correct link to the provided social', () => {
    const wrapper = mount(<HeroSection {...props} theme={heroSectionTheme} />);
    expect(wrapper.find(`a[href="${props.heroLinks[0].href}"]`)).toHaveLength(
      1
    );
  });
});
