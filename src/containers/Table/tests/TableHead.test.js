import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { tableHeadLabels } from 'tests/testData';
import TableHead from '../TableHead';

const mockOnHeadClick = jest.fn();

describe('containers/Table/TableHead', () => {
  it('should render proper number of cells', () => {
    const wrapper = shallow(
      <TableHead
        headerLabels={tableHeadLabels}
        onHeadCellClick={mockOnHeadClick}
        direction="asc"
      />
    );

    expect(toJson(wrapper.render())).toMatchSnapshot();
  });
});
