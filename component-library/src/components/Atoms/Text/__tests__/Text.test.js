import React from 'react';
import Text from '../Text.js';
import textTheme from '../themes/Text.default.scss';

describe('<Text />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<Text theme={textTheme} />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  describe('With Prop', () => {
    it('[isInline:true] should render a span ', () => {
      const wrapper = shallow(<Text isInline theme={textTheme} />);
      expect(wrapper.find('span')).toHaveLength(1);
    });

    it('[isInline:false] should render a div ', () => {
      const wrapper = shallow(<Text isInline={false} theme={textTheme} />);
      expect(wrapper.find('div')).toHaveLength(1);
    });

    it('[isBold] should apply the correct css class', () => {
      const wrapper = shallow(<Text isBold theme={textTheme} />);
      expect(wrapper.find('.textBold')).toHaveLength(1);
    });

    it('[isItalic] should apply the correct css class', () => {
      const wrapper = shallow(<Text isItalic theme={textTheme} />);
      expect(wrapper.find('.textItalic')).toHaveLength(1);
    });

    it('[isUnderlined] should apply the correct css class', () => {
      const wrapper = shallow(<Text isUnderlined theme={textTheme} />);
      expect(wrapper.find('.textUnderlined')).toHaveLength(1);
    });
  });
});
