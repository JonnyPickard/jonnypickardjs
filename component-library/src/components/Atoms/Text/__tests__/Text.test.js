import React from 'react';
import Text from '../Text.js';
import textTheme from '../themes/Text.default.scss';

const props = {
  theme: textTheme,
  content: 'Test Content'
};

describe('<Text />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<Text {...props} />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  describe('With Prop', () => {
    it('[isInline:true] should render a span ', () => {
      const wrapper = shallow(<Text isInline {...props} />);
      expect(wrapper.find('span')).toHaveLength(1);
    });

    it('[isInline:false] should render a div ', () => {
      const wrapper = shallow(<Text isInline={false} {...props} />);
      expect(wrapper.find('div')).toHaveLength(1);
    });

    it('[isBold] should apply the correct css class', () => {
      const wrapper = shallow(<Text isBold {...props} />);
      expect(wrapper.find('.textBold')).toHaveLength(1);
    });

    it('[isItalic] should apply the correct css class', () => {
      const wrapper = shallow(<Text isItalic {...props} />);
      expect(wrapper.find('.textItalic')).toHaveLength(1);
    });

    it('[isUnderlined] should apply the correct css class', () => {
      const wrapper = shallow(<Text isUnderlined {...props} />);
      expect(wrapper.find('.textUnderlined')).toHaveLength(1);
    });
  });
});
