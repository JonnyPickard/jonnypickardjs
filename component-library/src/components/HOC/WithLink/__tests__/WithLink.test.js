import React from 'react';
import WithLink from '../WithLink.js';
import withLinkTheme from '../themes/WithLink.default.scss';

const props = {
  theme: withLinkTheme,
  href: 'https://example.com'
};

const testChildContent = 'Test Content';

describe('<WithLink />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(
      <WithLink {...props}>
        <h1>{testChildContent}</h1>
      </WithLink>
    );
    expect(wrapper.find('WithLink')).toHaveLength(1);
    expect(wrapper.text()).toEqual(testChildContent);
  });

  it('renders with noStyling class', () => {
    const wrapper = shallow(
      <WithLink {...props} noStyling>
        <h1>{testChildContent}</h1>
      </WithLink>
    );
    expect(wrapper.find('.withLinkNoDefaultTheme')).toHaveLength(1);
  });
});
