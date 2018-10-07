import React from 'react';
import IconCaption from '../IconCaption.js';
import iconCaptionTheme from '../themes/IconCaption.default.scss';

describe('<IconCaption />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<IconCaption theme={iconCaptionTheme} />);
    expect(wrapper.find('IconCaption')).toHaveLength(1);
  });
});
