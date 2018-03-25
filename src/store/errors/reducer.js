import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { append, reject, propEq } from 'ramda';
import { errorsClearMessage } from './actions';
import {
  favouritesFetchRequest,
  favouritesFetchRequestSuccess,
  favouritesFetchRequestFailure,
  favouritesRemoveRequestFailure,
  favouritesAddRequestFailure,
} from '../favourites/actions';
import {
  currenciesFetchRequest,
  currenciesFetchRequestFailure,
  currenciesFetchRequestSuccess,
} from '../currencies/actions';

const defaultError = null;

const message = handleActions({
  [errorsClearMessage]: () => null,
  [favouritesFetchRequest]: () => null,
  [favouritesFetchRequestSuccess]: () => null,
  [favouritesFetchRequestFailure]: (_, { payload }) => console.log(payload.message) || payload,
  [favouritesRemoveRequestFailure]: (_, { payload }) => payload,
  [favouritesAddRequestFailure]: (_, { payload }) => console.log(payload.message) || payload,  
  [errorsClearMessage]: () => null,
  [currenciesFetchRequest]: () => null,
  [currenciesFetchRequestSuccess]: () => null,
  [currenciesFetchRequestFailure]: (_, { payload }) => payload.message,
}, defaultError);

export default combineReducers({
  message
});
