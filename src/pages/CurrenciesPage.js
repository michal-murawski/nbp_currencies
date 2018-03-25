import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'containers/Table/Table';
import PageLoader from 'components/PageLoader';
import { assoc, map } from 'ramda';
import FavouriteIndicatorIcon from 'containers/FavouriteIndicatorIcon';
import { getFavouriteIdByCode, getValueByPath } from 'utils/dataHelpers';
import { currenciesHeaderLabels } from './data';

class CurrenciesPage extends React.PureComponent {
  addIconToRow = row =>
    assoc(
      'add',
      <FavouriteIndicatorIcon
        code={row.code}
        favouriteId={getFavouriteIdByCode(row.code, this.props.favourites)}
      />,
      row
    );

  render() {
    const { fetching, currencies } = this.props;

    return fetching ? (
      <PageLoader />
    ) : (
      <Table
        headerLabels={currenciesHeaderLabels}
        rows={map(this.addIconToRow, currencies)}
      />
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
});

export default connect(mapStateToProps)(CurrenciesPage);
