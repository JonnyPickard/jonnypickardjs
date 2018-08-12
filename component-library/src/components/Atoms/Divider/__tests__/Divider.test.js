import React from 'react';
import Divider from '../Divider.js';
import dividerTheme from '../themes/Divider.default.scss';

describe('<Divider />', () => {
  const props = {
    dividerSize: 'xs',
    axis: 'horizontal',
    theme: dividerTheme
  };

  it('renders succesfully', () => {
    const wrapper = mount(<Divider {...props} />);

    expect(wrapper.find('Divider')).toHaveLength(1);
  });

  it('renders a hr when axis=horizontal', () => {
    const wrapper = shallow(<Divider {...props} />);

    expect(wrapper.find('hr')).toHaveLength(1);
  });

  it('renders a div when axis=vertical', () => {
    const wrapper = shallow(<Divider {...props} axis="vertical" />);

    expect(wrapper.find('div')).toHaveLength(1);
  });
});
