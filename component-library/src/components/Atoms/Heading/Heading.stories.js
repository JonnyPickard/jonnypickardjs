import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered';

import { Heading, headingThemeDefault } from '.';

const props = {
  theme: headingThemeDefault
};

const types = ['display', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const allHeadings = types.map(type => (
  <Heading
    content={`Heading - ${type}`}
    key={type}
    headingType={type}
    {...props}
  />
));

storiesOf('Atoms/Heading', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => <Fragment>{allHeadings}</Fragment>);
