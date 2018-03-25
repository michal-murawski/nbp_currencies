import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  TableHead as TableHeadMUI,
  TableRow,
  TableCell,
  TableSortLabel,
} from 'material-ui/Table';
import { TableHeadStyles } from './styles';

class TableHead extends Component {
  constructor() {
    super();

    this.state = {
      activeIndex: null,
    };
  }

  handleOnClick = (sorter, index) => () => {
    if (sorter) {
      this.setState({ activeIndex: index });
      this.props.onHeadCellClick(sorter);
    }
  };

  render() {
    const { classes, headerLabels, direction } = this.props;
    const { activeIndex } = this.state;

    return (
      <TableHeadMUI>
        <TableRow classes={{ root: classes.tableHeadRow }}>
          {headerLabels.map((label, index) => (
            <TableCell
              onClick={this.handleOnClick(label.sorter, index)}
              key={label.label}
              classes={{ head: classes.title }}
            >
              {label.sorter ? (
                <TableSortLabel direction={direction} active={activeIndex === index}>
                  {label.label}
                </TableSortLabel>
              ) : (
                label.label
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHeadMUI>
    );
  }
}

TableHead.propTypes = {
  onHeadCellClick: PropTypes.func,
  direction: PropTypes.oneOf(['asc', 'desc']),
  headerLabels: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      sorter: PropTypes.string,
    })
  ),
};

export default withStyles(TableHeadStyles)(TableHead);
