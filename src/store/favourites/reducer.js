import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { append, reject, propEq } from 'ramda';
import {
  favouritesFetchRequest,
  favouritesRemoveRequestSuccess,
  favouritesAddRequestSuccess,
  favouritesFetchRequestSuccess,
  favouritesFetchRequestFailure,
  favouritesRemoveAllRequestSuccess,
  favouritesRemoveAllRequest,
} from './actions';

const defaultData = [];
const defaultFetching = false;

const fetching = handleActions(
  {
    [favouritesFetchRequest]: () => true,
    [favouritesRemoveAllRequest]: () => true,
    [favouritesRemoveAllRequestSuccess]: () => false,
    [favouritesFetchRequestSuccess]: () => false,
    [favouritesFetchRequestFailure]: () => false,
  },
  defaultFetching
);

const data = handleActions(
  {
    [favouritesFetchRequestSuccess]: (_, { payload }) => payload,
    [favouritesRemoveAllRequestSuccess]: () => [],
    [favouritesAddRequestSuccess]: (state, { payload }) =>
      append(payload, state),
    [favouritesRemoveRequestSuccess]: (state, { payload }) =>
      reject(propEq('id', payload), state),
  },
  defaultData
);

export default combineReducers({
  fetching,
  data,
});
