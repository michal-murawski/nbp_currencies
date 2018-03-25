import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'containers/Table/Table';
import PageLoader from 'components/PageLoader';
import enchantRowWithIcon from 'containers/Table/extras/enchantRowWithIcon';
import { map } from 'ramda';
import { getValueByPath } from 'utils/dataHelpers';
import { currenciesHeaderLabels } from './data';

class CurrenciesPage extends React.PureComponent {
  getTableRows = () => {
    const { savingFavourites, favourites, currencies } = this.props;

    return map(
      row => enchantRowWithIcon({ row, favourites, savingFavourites }),
      currencies
    );
  };

  render() {
    const { fetching } = this.props;

    return fetching ? (
      <PageLoader />
    ) : (
      <Table headerLabels={currenciesHeaderLabels} rows={this.getTableRows()} />
    );
  }
}

CurrenciesPage.propTypes = {
  fetching: PropTypes.bool,
  error: PropTypes.bool,
  currencies: PropTypes.array,
  favourites: PropTypes.array,
};

const mapStateToProps = state => ({
  error: getValueByPath(['currencies', 'error'], state),
  fetching: getValueByPath(['currencies', 'fetching'], state),
  currencies: getValueByPath(['currencies', 'data'], state),
  favourites: getValueByPath(['favourites', 'data'], state),
  savingFavourites: getValueByPath(['favourites', 'savingFavourites'], state),
});

export default connect(mapStateToProps)(CurrenciesPage);
