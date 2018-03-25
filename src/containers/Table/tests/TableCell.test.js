import React from 'react';
import { shallow } from 'enzyme';
import TableCell from '../TableCell';

describe('containers/Table/TableCell', () => {
  it('should call TableCell with children', () => {
    const ChildDiv = () => <div>Child test</div>;
    const wrapper = shallow(
      <TableCell>
        <ChildDiv />
      </TableCell>
    );

    expect(wrapper.find(ChildDiv)).toHaveLength(1);
  });
});
