import React from 'react';
import ProjectCardListSection from '../ProjectCardListSection.js';
import ProjectCardListSectionTheme from '../themes/ProjectCardListSection.default.scss';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

describe('<ProjectCardListSection />', () => {
  const props = {
    theme: ProjectCardListSectionTheme,
    projectCardListSectionTitle: 'Test Title'
  };

  it('renders succesfully', () => {
    const options = new ReactRouterEnzymeContext();
    const wrapper = mount(<ProjectCardListSection {...props} />, options.get());

    expect(wrapper.find('ProjectCardListSection')).toHaveLength(1);
  });
});
