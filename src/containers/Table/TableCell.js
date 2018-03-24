import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TableCell as TableCellMUI } from 'material-ui/Table';

const styles = theme => ({
  root: {
    textAlign: 'left',
    fontSize: 18
  }
});

function TableCell(props) {
  const { children, classes } = props;

  return (
    <TableCellMUI classes={{ root: classes.root }}>{children}</TableCellMUI>
  );
}

TableCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default withStyles(styles)(TableCell);
