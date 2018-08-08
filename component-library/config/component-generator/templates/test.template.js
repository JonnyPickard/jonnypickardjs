const { uncapitalize } = require('./helpers');

module.exports = componentName => `\
import React from 'react';
import ${componentName} from '../${componentName}.js';
import ${uncapitalize(
  componentName
)}Theme from '../themes/${componentName}.default.scss';

describe('<${componentName} />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<${componentName} theme={${uncapitalize(
  componentName
)}Theme}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
`;
