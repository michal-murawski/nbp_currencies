import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Table from 'containers/Table/Table';
import PageLoader from 'components/PageLoader';
import { favouritesFetchRequest } from 'store/favourites/actions';

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
  }
];

class FavouritesPage extends React.Component {
  render() {
    const { fetching, favourites } = this.props;

    return (
      <div>
        {fetching ?
          <PageLoader />
          : <Table headerLabels={headerLabels} rows={favourites} />
        }
      </div>
    );
  }
};

FavouritesPage.propTypes = {

};

const mapStateToProps = (state) => ({
  fetching: state.favourites.fetching,
  favourites: state.favourites.data
});


export default connect(mapStateToProps)(FavouritesPage);
