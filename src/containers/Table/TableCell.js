import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TableCell as TableCellMUI } from 'material-ui/Table';

const styles = theme => ({
  root: {
    padding: `0 ${theme.gutters[4]}`,
    textAlign: 'center',
    fontSize: 18
  }
});

function TableCell(props) {
  const { children, classes } = props;

  return (
    <TableCellMUI padding="none" classes={{ root: classes.root }}>{children}</TableCellMUI>
  );
}

TableCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default withStyles(styles)(TableCell);
