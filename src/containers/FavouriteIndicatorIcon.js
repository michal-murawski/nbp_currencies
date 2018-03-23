import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Favorite from 'material-ui-icons/Favorite';
import NotFavorite from 'material-ui-icons/FavoriteBorder';
import IconButton from 'components/IconButton';
import IconLoader from 'components/IconLoader';
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
    const { favouriteId, saving } = this.props;

    if (saving) {
      return <IconLoader />;
    }
    console.log('icon render');
    return (
      <IconButton onClick={() => { this.onClickHandler(); }}>
        {favouriteId ?
          <Favorite/>
          : <NotFavorite/>
        }
      </IconButton>
    );
  }
}

FavouritesPage.propTypes = {
  saving: PropTypes.bool,
  code: PropTypes.string,
  favouriteId: PropTypes.number,
};

const mapDispatchToProps = (dispatch) => ({
  favouritesAddRequest: (code) => dispatch(favouritesAddRequestAction(code)),
  favouritesRemoveRequest: (code) => dispatch(favouritesRemoveRequestAction(code)),
});

export default connect(null, mapDispatchToProps)(FavouritesPage);
