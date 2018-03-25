import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { append, reject, propEq } from 'ramda';
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

const defaultError = null;

const message = handleActions(
  {
    [errorsClearMessage]: () => null,
    [favouritesFetchRequest]: () => null,
    [favouritesFetchRequestFailure]: (_, { payload }) => payload,
    [favouritesRemoveRequestFailure]: (_, { payload }) => payload,
    [favouritesAddRequestFailure]: (_, { payload }) => payload,
    [errorsClearMessage]: () => {
      return null;
    },
    [currenciesFetchRequest]: () => null,
    [currenciesFetchRequestFailure]: (_, { payload }) =>
      console.log(payload) || payload.message,
  },
  defaultError
);

export default combineReducers({
  message,
});
