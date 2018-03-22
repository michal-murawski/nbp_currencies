import React from 'react';
import PropTypes from 'prop-types';
import { propOr } from 'ramda';
import { TableBody as TableBodyMUI, TableRow } from 'material-ui/Table';

import TableCell from './TableCell';

const generateKey = () => Math.floor(Math.random() * 1000);

function TableBody(props) {
  const { rows, rowKeys } = props;

  return (
    <TableBodyMUI>
      {rows.map(row => (
        <TableRow key={propOr(generateKey(), 'code', row)}>
          {rowKeys.map(key => 
            <TableCell key={propOr(generateKey(), key, row)}>{propOr('---', key, row)}</TableCell>
          )}
        </TableRow>
      ))}
    </TableBodyMUI>
  );
}


TableBody.propTypes = {
  type: PropTypes.string,
  rows: PropTypes.array,
  rowKeys: PropTypes.array,
};

export default TableBody;
