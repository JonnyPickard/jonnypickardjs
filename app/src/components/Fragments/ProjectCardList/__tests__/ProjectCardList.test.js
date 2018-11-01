import React from 'react';
import ProjectCardList from '../ProjectCardList.js';
import ProjectCardListTheme from '../themes/ProjectCardList.default.scss';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

describe('<ProjectCardList />', () => {
  const props = {
    theme: ProjectCardListTheme
  };

  it('renders succesfully', () => {
    const options = new ReactRouterEnzymeContext();
    const wrapper = mount(<ProjectCardList {...props} />, options.get());

    expect(wrapper.find('ProjectCardList')).toHaveLength(1);
  });
});
