import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { append, without } from 'ramda';
import {
  favouritesFetchRequest,
  favouritesAddRequest,
  favouritesRemoveRequest,
  favouritesRemoveRequestSuccess,
  favouritesAddRequestSuccess,
  favouritesFetchRequestSuccess,
  favouritesFetchRequestFailure,
  favouritesRemoveRequestFailure,
  favouritesAddRequestFailure,
} from './actions';

const defaultData = [];
const defaultError = null;
const defaultFetching = false;
const defaultSaving = false;

const fetching = handleActions({
  [favouritesFetchRequest]: () => true,
  [favouritesFetchRequestSuccess]: () => false,
  [favouritesFetchRequestFailure]: () => false,
}, defaultFetching);

const saving = handleActions({
  [favouritesAddRequest]: () => true,
  [favouritesRemoveRequest]: () => true,
  [favouritesRemoveRequestSuccess]: () => false,
  [favouritesAddRequestSuccess]: () => false,
  [favouritesRemoveRequestFailure]: () => false,
  [favouritesAddRequestFailure]: () => false,
}, defaultSaving);

const data = handleActions({
  [favouritesFetchRequestSuccess]: (_, { payload }) => payload,
  [favouritesAddRequestSuccess]: (state, { payload }) => append(payload, state),
  [favouritesRemoveRequestSuccess]: (state, { payload }) => without(payload, state),
}, defaultData);

const error = handleActions({
  [favouritesFetchRequest]: () => null,
  [favouritesFetchRequestSuccess]: () => null,
  [favouritesFetchRequestFailure]: (_, { payload }) => payload,
}, defaultError);

export default combineReducers({
  fetching,
  saving,
  data,
  error,
});
