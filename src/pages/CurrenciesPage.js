import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'containers/Table/Table';
import PageLoader from 'components/PageLoader';
import FavouriteIndicatorIcon from 'containers/FavouriteIndicatorIcon';
import {getFavouriteIdByCode} from "../utils/dataHelpers";
export const headerLabels = [
  {
    label: 'Name',
    sorter: 'currency',
    key: 'currency',
  },
  {
    label: 'Code',
    sorter: 'code',
    key: 'code',
  },
  {
    label: 'Value [PLN]',
    sorter: 'mid',
    key: 'mid'
  },
  {
    label : 'Add to favourites',
    sorter: '',
    key: 'add'
  }
];

class CurrenciesPage extends React.PureComponent {

  renderPageContent = () => {
    const { currencies, favourites } = this.props;
    const enchantedRow = currencies.map((row) => ({
      ...row,
      add: <FavouriteIndicatorIcon code={row.code} favouriteId={getFavouriteIdByCode(row.code, favourites)} />,
    }));

    return (
      <Table headerLabels={headerLabels} rows={enchantedRow} />
    );
  };

  render() {
    const { fetching } = this.props;

    return fetching ?
          <PageLoader />
          : this.renderPageContent()
  }
}

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
