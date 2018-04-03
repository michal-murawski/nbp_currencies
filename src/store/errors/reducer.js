import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { errorsClearMessage } from './actions';
import {
  favouritesFetchRequest,
  favouritesFetchRequestFailure,
  favouritesRemoveRequestFailure,
  favouritesAddRequestFailure,
  favouritesRemoveAllRequestFailure,
} from '../favourites/actions';
import {
  currenciesFetchRequest,
  currenciesFetchRequestFailure,
} from '../currencies/actions';

export const defaultError = null;

const message = handleActions(
  {
    [errorsClearMessage]: () => null,
    [favouritesFetchRequest]: () => null,
    [favouritesFetchRequestFailure]: (state, { payload }) => payload.message,
    [favouritesRemoveRequestFailure]: (state, { payload }) => payload.message,
    [favouritesAddRequestFailure]: (state, { payload }) => payload.message,
    [favouritesRemoveAllRequestFailure]: (state, { payload }) => payload.message,
    [errorsClearMessage]: () => {
      return null;
    },
    [currenciesFetchRequest]: () => null,
    [currenciesFetchRequestFailure]: (state, { payload }) => payload.message,
  },
  defaultError
);

export default combineReducers({
  message,
});
