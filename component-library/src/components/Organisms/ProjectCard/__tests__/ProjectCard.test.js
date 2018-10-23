import React from 'react';
import ProjectCard from '../ProjectCard.js';
import projectCardTheme from '../themes/ProjectCard.default.scss';

const props = {
  theme: projectCardTheme,
  projectTitle: 'Whatcar?',
  projectImage: {
    src: 'https://via.placeholder.com/280x280',
    alt: 'Project Image'
  }
};

describe('<ProjectCard />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<ProjectCard {...props} />);
    expect(wrapper.find('ProjectCard')).toHaveLength(1);
  });

  it('renders with the css selector for scale animation', () => {
    const wrapper = mount(<ProjectCard {...props} hasScaleEffect />);
    expect(wrapper.find('.projectCardWithScaleEffect')).toHaveLength(1);
  });
});
