import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableMUI from 'material-ui/Table';
import { sortArrayAscOrDesc } from 'utils/dataSort';
import TableHead from './TableHead';
import TableBody from './TableBody';


class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: props.rows,
      sortDirection: 'asc',
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ rows: nextProps.rows });
  }

  getSortDirection(sortDirection) {
    if (sortDirection === 'asc') {
      return 'desc';
    } else {
      return 'asc';
    }
  }

  sortTableBy = (searchParameter) => {
    this.setState(({ rows, sortDirection }) => ({
      rows: sortArrayAscOrDesc(searchParameter, this.getSortDirection(sortDirection), rows),
      sortDirection: this.getSortDirection(sortDirection),
    }));
  };

  render() {
    const { headerLabels, rowKeys, type } = this.props;
    const { rows, sortDirection } = this.state;

    return (
      <TableMUI>
        <TableHead headerLabels={headerLabels} onHeadCellClick={this.sortTableBy} direction={sortDirection} />
        <TableBody rows={rows} rowKeys={rowKeys} type={type} />
      </TableMUI>
    );
  }
}

Table.defaultProps = {
  rows: [],
  rowKeys: [],
}

Table.propTypes = {
  type: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string,
    postal_code: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    tel: PropTypes.string,
    email: PropTypes.string,
    confirmed: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number
    ]),
    extra_information: PropTypes.string,
  })),
  rowKeys: PropTypes.arrayOf(PropTypes.string),
};

export default Table;
