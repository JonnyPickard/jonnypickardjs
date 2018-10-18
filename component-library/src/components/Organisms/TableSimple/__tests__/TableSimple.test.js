import React from 'react';
import TableSimple from '../TableSimple.js';
import tableSimpleTheme from '../themes/TableSimple.default.scss';

const props = {
  cells: [
    {
      text: 'Javascript',
      color: 'mintHeavy'
    },
    {
      text: 'React',
      color: 'mintMedium'
    },
    {
      text: 'Flow Types',
      color: 'mintLight'
    }
  ],
  tableKey: [
    {
      text: 'Light',
      color: 'mintLight'
    },
    {
      text: 'Moderate',
      color: 'mintMedium'
    },
    {
      text: 'Heavy',
      color: 'mintHeavy'
    }
  ],
  tableKeyTitle: 'Usage'
};

describe('<TableSimple />', () => {
  it('renders succesfully with all sections', () => {
    const wrapper = mount(<TableSimple {...props} theme={tableSimpleTheme} />);
    expect(wrapper.find('TableSimple')).toHaveLength(1);
    expect(wrapper.find('.tableSimpleCells')).toHaveLength(1);
    expect(wrapper.find('.tableSimpleKey')).toHaveLength(1);
  });
});
