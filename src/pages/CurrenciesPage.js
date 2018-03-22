import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'containers/Table/Table';
import PageLoader from 'components/PageLoader';
import { filterListWithout } from 'utils/dataHelpers';

export const headerLabels = [
  {
    label: 'Name',
    sorter: 'currency'
  },
  {
    label: 'Code',
    sorter: 'code'
  },
  {
    label: 'Value [PLN]',
    sorter: 'mid'
  },
  {
    label : 'Add to favourites',
    sorter: ''
  }
];

class CurrenciesPage extends React.PureComponent {

  renderPageContent = () => {
    const { currencies, favourites } = this.props;
    const filtered = (currencies.length && favourites.length) ? filterListWithout(currencies, favourites, 'code') : currencies;

    return (
      <Table headerLabels={headerLabels} rows={filtered} />
    );
  }
  render() {
    const { fetching } = this.props;

    return fetching ?
          <PageLoader />
          : this.renderPageContent()
  }
};

CurrenciesPage.propTypes = {
  fetching:PropTypes.bool,
  error:PropTypes.bool,
  currencies: PropTypes.array,
  favourites: PropTypes.array,
};

const mapStateToProps = (state) => ({
  error: state.currencies.error,
  fetching: state.currencies.fetchig,
  currencies: state.currencies.data,
  favourites: state.favourites.data
});


export default connect(mapStateToProps)(CurrenciesPage);
