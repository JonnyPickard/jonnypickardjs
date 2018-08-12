import React from 'react';
import ProfilePhoto from '../ProfilePhoto.js';
import profilePhotoTheme from '../themes/ProfilePhoto.default.scss';

describe('<ProfilePhoto />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<ProfilePhoto theme={profilePhotoTheme}/>);
    expect(wrapper.find('ProfilePhoto')).toHaveLength(1);
  });
});
