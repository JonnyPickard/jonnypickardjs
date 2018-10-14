import React from 'react';
import Icon from '../Icon.js';
import iconTheme from '../themes/Icon.default.scss';

describe('<Icon />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<Icon iconName="testName" theme={iconTheme} />);
    expect(wrapper.find('Icon')).toHaveLength(1);
  });

  it('renders with bg border radius', () => {
    const wrapper = mount(
      <Icon iconName="testName" theme={iconTheme} backgroundBorderRadius />
    );
    expect(wrapper.find('.iconbackgroundBorderRadius')).toHaveLength(1);
  });
});
