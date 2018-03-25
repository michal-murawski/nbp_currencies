import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { tableHeadLabels } from 'tests/testData';
import TableHead from '../TableHead';

const mockOnHeadClick = jest.fn();

describe('containers/Table/TableCell', () => {
  it('should call TableCell with children', () => {
    const ChildDiv = () => <div>Child test</div>;
    const wrapper = render(
      <TableHead
        headerLabels={tableHeadLabels}
        onHeadCellClick={mockOnHeadClick}
        direction="asc"
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
