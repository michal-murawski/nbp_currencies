import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { append, reject, propEq, prop, without } from 'ramda';
import {
  favouritesFetchRequest,
  favouritesRemoveRequestSuccess,
  favouritesAddRequestSuccess,
  favouritesFetchRequestSuccess,
  favouritesFetchRequestFailure,
  favouritesRemoveAllRequestSuccess,
  favouritesRemoveAllRequest,
  favouritesAddRequest,
  favouritesAddRequestFailure,
  favouritesRemoveRequest,
  favouritesRemoveRequestFailure,
  favouritesRemoveAllRequestFailure,
} from './actions';

export const defaultData = [];
export const defaultSavingFavourites = [];
export const defaultFetching = false;

const fetching = handleActions(
  {
    [favouritesFetchRequest]: () => true,
    [favouritesRemoveAllRequest]: () => true,
    [favouritesRemoveAllRequestSuccess]: () => false,
    [favouritesRemoveAllRequestFailure]: () => false,
    [favouritesFetchRequestSuccess]: () => false,
    [favouritesFetchRequestFailure]: () => false,
  },
  defaultFetching
);

const savingFavourites = handleActions(
  {
    [favouritesAddRequest]: (state, { payload }) => append(payload, state),
    [favouritesAddRequestFailure]: (state, { payload }) => console.log(state, payload) ||
      without(prop('code', payload), state),
    [favouritesAddRequestSuccess]: (state, { payload }) =>
      without(prop('code', payload), state),
    [favouritesRemoveRequest]: (state, { payload }) =>
      append(prop('code', payload), state),
    [favouritesRemoveRequestSuccess]: (state, { payload }) =>
      without(prop('code', payload), state),
    [favouritesRemoveRequestFailure]: (state, { payload }) =>
      without(prop('code', payload), state),
    [favouritesRemoveAllRequestFailure]: () => defaultSavingFavourites
  },
  defaultSavingFavourites
);

const data = handleActions(
  {
    [favouritesFetchRequestSuccess]: (state, { payload }) => payload,
    [favouritesRemoveAllRequestSuccess]: () => [],
    [favouritesAddRequestSuccess]: (state, { payload }) => append(payload, state),
    [favouritesRemoveRequestSuccess]: (state, { payload }) =>
      reject(propEq('id', prop('id', payload)), state),
  },
  defaultData
);

export default combineReducers({
  savingFavourites,
  fetching,
  data,
});
