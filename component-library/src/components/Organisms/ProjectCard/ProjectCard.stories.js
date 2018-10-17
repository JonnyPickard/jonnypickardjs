import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered';

import { ProjectCard, projectCardThemeDefault } from '.';

const props = {
  theme: projectCardThemeDefault,
  projectTitle: 'Whatcar?',
  projectImage: {
    src: 'http://via.placeholder.com/280x280',
    alt: 'Project Image'
  }
};

storiesOf('Organisms/Card/ProjectCard', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <ProjectCard
      {...props}
      hasScaleEffect={boolean('Has Scaling Effect', true)}
    />
  ));
