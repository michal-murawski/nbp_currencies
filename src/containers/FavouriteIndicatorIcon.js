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

class FavouriteIndicatorIcon extends React.PureComponent {
  onClickHandler = () => {
    const {
      code,
      favouriteId,
      favouritesAddRequest,
      favouritesRemoveRequest,
    } = this.props;

    if (favouriteId) {
      favouritesRemoveRequest({ id: favouriteId, code });
    } else {
      return favouritesAddRequest(code);
    }
  };

  render() {
    const { favouriteId, favouritesFetching, isSaving } = this.props;
    if (favouritesFetching || isSaving) {
      return <IconLoader />;
    }

    return (
      <IconButton onClick={this.onClickHandler}>
        {favouriteId ? <Favorite /> : <NotFavorite />}
      </IconButton>
    );
  }
}

FavouriteIndicatorIcon.propTypes = {
  favouritesFetching: PropTypes.bool,
  isSaving: PropTypes.bool,
  code: PropTypes.string,
  favouriteId: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  favouritesAddRequest: code => dispatch(favouritesAddRequestAction(code)),
  favouritesRemoveRequest: code => dispatch(favouritesRemoveRequestAction(code)),
});

const mapStateToProps = state => ({
  favouritesFetching: getValueByPath(['favourites', 'fetching'], state),
});

export const FavouriteIndicatorIconRaw = FavouriteIndicatorIcon;

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteIndicatorIcon);
