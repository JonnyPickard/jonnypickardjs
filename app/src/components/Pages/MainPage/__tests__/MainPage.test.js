import React from 'react';
import MainPage from '../MainPage.js';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

describe('<MainPage />', () => {
  it('renders succesfully', () => {
    const options = new ReactRouterEnzymeContext();
    const wrapper = mount(<MainPage />, options.get());

    expect(wrapper.find('MainPage')).toHaveLength(1);
  });
});
