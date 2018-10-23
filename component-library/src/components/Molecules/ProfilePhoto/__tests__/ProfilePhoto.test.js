import React from 'react';
import ProfilePhoto from '../ProfilePhoto.js';
import profilePhotoTheme from '../themes/ProfilePhoto.default.scss';

const props = {
  src: 'https://via.placeholder.com/200x200',
  alt: 'Image Alt'
};

describe('<ProfilePhoto />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(
      <ProfilePhoto {...props} theme={profilePhotoTheme} />
    );
    expect(wrapper.find('ProfilePhoto')).toHaveLength(1);
  });
});
