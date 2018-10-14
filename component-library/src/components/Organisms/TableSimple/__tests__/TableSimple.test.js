import React from 'react';
import TableSimple from '../TableSimple.js';
import tableSimpleTheme from '../themes/TableSimple.default.scss';

describe('<TableSimple />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<TableSimple theme={tableSimpleTheme} />);
    expect(wrapper.find('TableSimple')).toHaveLength(1);
  });
});
