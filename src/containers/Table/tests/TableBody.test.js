import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { currencies, tableHeadLabels } from 'tests/testData';
import { TableRow } from 'material-ui/Table';

import { getRowKeys } from 'utils/tableHelpers';
import TableBody from '../TableBody';
import TableCell from '../TableCell';

let count = 0;
function mockRandomNumber() {
  return count++;
}

jest.mock('utils/dataHelpers', () => ({
  generateRandomNumber: jest.fn(mockRandomNumber),
}));

describe('containers/Table/TableBody', () => {
  it('should render proper number of cells', () => {
    const wrapper = shallow(
      <TableBody rows={currencies} rowKeys={getRowKeys(tableHeadLabels)} />
    );

    const rows = wrapper.find(TableRow);
    const cellsLength = Object.keys(currencies[0]).length;
    const favIconLength = 1;
    expect(rows).toHaveLength(currencies.length);

    rows.forEach(row => {
      expect(row.find(TableCell)).toHaveLength(cellsLength + favIconLength);
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
