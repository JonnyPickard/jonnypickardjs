import React from 'react';
import ProjectCard from '../ProjectCard.js';
import projectCardTheme from '../themes/ProjectCard.default.scss';

describe('<ProjectCard />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<ProjectCard theme={projectCardTheme} />);
    expect(wrapper.find('ProjectCard')).toHaveLength(1);
  });
});
