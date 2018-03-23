import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'containers/Table/Table';
import PageLoader from 'components/PageLoader';


export const headerLabels = [
  {
    label: 'Name',
    sorter: 'currency',
      key: 'currency'
  },
  {
    label: 'Code',
    sorter: 'code',
      key: 'code'
  },
  {
    label: 'Value [PLN]',
    sorter: 'mid',
      key: 'mid'
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
}

FavouritesPage.propTypes = {
    fetching: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  fetching: state.favourites.fetching,
  favourites: state.favourites.data
});


export default connect(mapStateToProps)(FavouritesPage);
