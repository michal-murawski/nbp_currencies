import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { errorsClearMessage } from './actions';
import {
  favouritesFetchRequest,
  favouritesFetchRequestFailure,
  favouritesRemoveRequestFailure,
  favouritesAddRequestFailure,
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
    [favouritesFetchRequestFailure]: (_, { payload }) => payload.message,
    [favouritesRemoveRequestFailure]: (_, { payload }) => payload.message,
    [favouritesAddRequestFailure]: (_, { payload }) => payload.message,
    [errorsClearMessage]: () => {
      return null;
    },
    [currenciesFetchRequest]: () => null,
    [currenciesFetchRequestFailure]: (_, { payload }) => payload.message,
  },
  defaultError
);

export default combineReducers({
  message,
});
