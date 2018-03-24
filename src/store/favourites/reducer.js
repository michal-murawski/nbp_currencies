import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { append, reject, propEq } from 'ramda';
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
  favouritesRemoveAllRequestSuccess,
  favouritesRemoveAllRequest,
} from './actions';

const defaultData = [];
const defaultError = null;
const defaultFetching = false;
const defaultSaving = false;


const fetching = handleActions({
  [favouritesFetchRequest]: () => true,
  [favouritesRemoveAllRequest]: () => true,  
  [favouritesRemoveAllRequestSuccess]: () => false,
  [favouritesFetchRequestSuccess]: () => false,
  [favouritesFetchRequestFailure]: () => false,
}, defaultFetching);

const saving = handleActions({
  [favouritesAddRequest]: () => true,
  [favouritesRemoveRequest]: () => true,
  [favouritesRemoveAllRequestSuccess]: () => true,  
  [favouritesRemoveRequestSuccess]: () => false,
  [favouritesAddRequestSuccess]: () => false,
  [favouritesRemoveRequestFailure]: () => false,
  [favouritesAddRequestFailure]: () => false,
}, defaultSaving);

const data = handleActions({
  [favouritesFetchRequestSuccess]: (_, { payload }) => payload,
  [favouritesRemoveAllRequestSuccess]: () => [],
  [favouritesAddRequestSuccess]: (state, { payload }) => append(payload, state),
  [favouritesRemoveRequestSuccess]: (state, { payload }) => reject(propEq('id', payload), state),
}, defaultData);

const error = handleActions({
  [favouritesFetchRequest]: () => null,
  [favouritesFetchRequestSuccess]: () => null,
  [favouritesFetchRequestFailure]: (_, { payload }) => payload,
  [favouritesRemoveRequestFailure]: (_, { payload }) => payload,
  [favouritesAddRequestFailure]: (_, { payload }) => payload,  
}, defaultError);

export default combineReducers({
  fetching,
  saving,
  data,
  error,
});