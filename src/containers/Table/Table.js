import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableMUI from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { sortArray } from 'utils/dataHelpers';
import { getRowKeys } from 'utils/tableHelpers';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: props.rows,
      sortDirection: 'asc',
      searchParameter: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({ searchParameter, sortDirection, rows }) => ({
      rows: sortArray(searchParameter, sortDirection, nextProps.rows),
    }));
  }

  getSortDirection(sortDirection) {
    if (sortDirection === 'asc') {
      return 'desc';
    } else {
      return 'asc';
    }
  }

  sortTableBy = searchParameter => {
    this.setState(({ rows, sortDirection }) => ({
      rows: sortArray(searchParameter, this.getSortDirection(sortDirection), rows),
      sortDirection: this.getSortDirection(sortDirection),
      searchParameter,
    }));
  };

  render() {
    const { headerLabels } = this.props;
    const { rows, sortDirection } = this.state;

    return (
      <Paper>
        <TableMUI>
          <TableHead
            headerLabels={headerLabels}
            onHeadCellClick={this.sortTableBy}
            direction={sortDirection}
          />
          <TableBody rows={rows} rowKeys={getRowKeys(headerLabels)} />
        </TableMUI>
      </Paper>
    );
  }
}

Table.defaultProps = {
  rows: [],
};

Table.propTypes = {
  rows: PropTypes.array,
};

export default Table;
