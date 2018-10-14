import React from 'react';
import TableSimple from '../TableSimple.js';
import tableSimpleTheme from '../themes/TableSimple.default.scss';

const props = {
  cells: [
    {
      text: 'Javascript',
      backgroundColor: 'mintHeavy'
    },
    {
      text: 'React',
      backgroundColor: 'mintMedium'
    },
    {
      text: 'Flow Types',
      backgroundColor: 'mintLight'
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
