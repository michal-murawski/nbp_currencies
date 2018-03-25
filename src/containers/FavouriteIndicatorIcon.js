import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Favorite from 'material-ui-icons/Favorite';
import NotFavorite from 'material-ui-icons/FavoriteBorder';
import IconButton from 'components/IconButton';
import IconLoader from 'components/IconLoader';
import { getValueByPath } from 'utils/dataHelpers';
import {
  favouritesAddRequest as favouritesAddRequestAction,
  favouritesRemoveRequest as favouritesRemoveRequestAction,
} from 'store/favourites/actions';

class FavouritesPage extends React.PureComponent {
  onClickHandler = () => {
    const {
      code,
      favouriteId,
      favouritesAddRequest,
      favouritesRemoveRequest,
    } = this.props;

    if (favouriteId) {
      return favouritesRemoveRequest(favouriteId);
    } else {
      return favouritesAddRequest(code);
    }
  };

  render() {
    const { favouriteId, favouritesFetching } = this.props;

    if (favouritesFetching) {
      return <IconLoader />;
    }

    return (
      <IconButton
        onClick={() => {
          this.onClickHandler();
        }}
      >
        {favouriteId ? <Favorite /> : <NotFavorite />}
      </IconButton>
    );
  }
}

FavouritesPage.propTypes = {
  favouritesFetching: PropTypes.bool,
  code: PropTypes.string,
  favouriteId: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  favouritesAddRequest: code => dispatch(favouritesAddRequestAction(code)),
  favouritesRemoveRequest: code =>
    dispatch(favouritesRemoveRequestAction(code)),
});

const mapStateToProps = state => ({
  favouritesFetching: getValueByPath(['favourites', 'fetching'], state),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);
