import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Table from 'containers/Table/Table';
import PageLoader from 'components/PageLoader';
import {
  getValueByPath,
  filterCurrenciesByFavourites,
} from 'utils/dataHelpers';
import { assoc, map, prop } from 'ramda';
import FavouriteIndicatorIcon from 'containers/FavouriteIndicatorIcon';
import { favouritesRemoveAllRequest as favouritesRemoveAllRequestAction } from 'store/favourites/actions';
import { getFavouriteIdByCode } from 'utils/dataHelpers';
import { favouritesHeaderLabels } from './data';

class FavouritesPage extends React.PureComponent {
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
    const {
      fetching,
      favourites,
      currencies,
      favouritesRemoveAllRequest,
    } = this.props;
    const favouritesOnly = filterCurrenciesByFavourites(currencies)(favourites);
    const getIds = map(prop('id'));

    return (
      <div>
        {fetching ? (
          <PageLoader />
        ) : (
          <Grid item>
            <Button
              variant="raised"
              color="secondary"
              onClick={() => {
                favouritesRemoveAllRequest(getIds(favourites));
              }}
            >
              Unlove them all
            </Button>
            <Table
              headerLabels={favouritesHeaderLabels}
              rows={map(this.addIconToRow, favouritesOnly)}
            />
          </Grid>
        )}
      </div>
    );
  }
}

FavouritesPage.propTypes = {
  fetching: PropTypes.bool,
  favouritesRemoveAllRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  fetching: getValueByPath(['favourites', 'fetching'], state),
  favourites: getValueByPath(['favourites', 'data'], state),
  currencies: getValueByPath(['currencies', 'data'], state),
});

const mapDispatchToState = dispatch => ({
  favouritesRemoveAllRequest: favourites =>
    dispatch(favouritesRemoveAllRequestAction(favourites)),
});

export default connect(mapStateToProps, mapDispatchToState)(FavouritesPage);
