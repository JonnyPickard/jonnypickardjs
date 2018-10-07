import React from 'react';
import IconCaption from '../IconCaption.js';
import iconCaptionTheme from '../themes/IconCaption.default.scss';

const props = {
  captionText: 'Linkedin',
  iconName: 'testName',
  iconColor: 'black'
};

describe('<IconCaption />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<IconCaption {...props} theme={iconCaptionTheme} />);
    const iconCaption = wrapper.find('IconCaption');

    expect(iconCaption).toHaveLength(1);
    expect(iconCaption.text()).toEqual(props.captionText);
  });
});
