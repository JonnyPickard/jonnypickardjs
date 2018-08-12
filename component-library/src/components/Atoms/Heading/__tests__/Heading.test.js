import React from 'react';
import Heading from '../Heading.js';
import headingTheme from '../themes/Heading.default.scss';

const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

describe('<Heading />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<Heading theme={headingTheme} />);
    expect(wrapper.find('Heading')).toHaveLength(1);
  });

  describe('renders the correct element for the given headingType headingType:', () => {
    it('[display]', () => {
      const wrapper = shallow(
        <Heading headingType={'display'} theme={headingTheme} />
      );
      expect(wrapper.find('h1')).toHaveLength(1);
    });

    for (let type of types) {
      it(`[${type}]`, () => {
        const wrapper = shallow(
          <Heading headingType={`${type}`} theme={headingTheme} />
        );

        expect(wrapper.find(`${type}`)).toHaveLength(1);
      });
    }
  });
});
