import React from 'react';
import PropTypes from 'prop-types';
import { TableBody as TableBodyMUI, TableRow } from 'material-ui/Table';
import { getProperRowsCellValues } from 'utils/tableHelpers';
import TableCell from './TableCell';


function TableBody(props) {
  const { rows, rowKeys, type } = props;

  return (
    <TableBodyMUI>
      {rows.map(row => (
        <TableRow key={row.id}>
          {rowKeys.map(key => 
            <TableCell key={key}>{getProperRowsCellValues(row, key, type)}</TableCell>
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
