import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Table from 'containers/Table/Table';
import enchantRowWithIcon from 'containers/Table/extras/enchantRowWithIcon';
import PageLoader from 'components/PageLoader';
import { getValueByPath, filterCurrenciesByFavourites } from 'utils/dataHelpers';
import { map, prop } from 'ramda';
import { favouritesRemoveAllRequest as favouritesRemoveAllRequestAction } from 'store/favourites/actions';
import { favouritesHeaderLabels } from './data';

class FavouritesPage extends React.PureComponent {
  getTableRows = () => {
    const { savingFavourites, favourites, currencies } = this.props;
    const favouritesOnly = filterCurrenciesByFavourites(currencies)(favourites);

    return map(
      row => enchantRowWithIcon({ row, favourites, savingFavourites }),
      favouritesOnly
    );
  };

  render() {
    const { fetching, favourites, favouritesRemoveAllRequest } = this.props;
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
            <Table headerLabels={favouritesHeaderLabels} rows={this.getTableRows()} />
          </Grid>
        )}
      </div>
    );
  }
}

FavouritesPage.propTypes = {
  fetching: PropTypes.bool,
  favouritesRemoveAllRequest: PropTypes.func,
  currencies: PropTypes.array,
  savingFavourites: PropTypes.array,
};

const mapStateToProps = state => ({
  fetching: getValueByPath(['favourites', 'fetching'], state),
  favourites: getValueByPath(['favourites', 'data'], state),
  savingFavourites: getValueByPath(['favourites', 'savingFavourites'], state),
  currencies: getValueByPath(['currencies', 'data'], state),
});

const mapDispatchToState = dispatch => ({
  favouritesRemoveAllRequest: favourites =>
    dispatch(favouritesRemoveAllRequestAction(favourites)),
});

export default connect(mapStateToProps, mapDispatchToState)(FavouritesPage);
