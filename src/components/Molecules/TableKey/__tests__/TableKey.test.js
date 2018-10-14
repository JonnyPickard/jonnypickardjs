import React from 'react';
import { TableKey } from '../';

describe('<TableKey />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<TableKey />);
    expect(wrapper).toMatchSnapshot();
  });
});
