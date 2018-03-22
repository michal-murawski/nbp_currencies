import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  currenciesFetchRequest,
  currenciesFetchRequestFailure,
  currenciesFetchRequestSuccess,
} from './actions';

const defaultFetching = false;
const defaultError = null;
const defaultData = [];

const fetching = handleActions({
  [currenciesFetchRequest]: () => true,
  [currenciesFetchRequestFailure]: () => false,
  [currenciesFetchRequestSuccess]: () => false,
}, defaultFetching);

const data = handleActions({
  [currenciesFetchRequestSuccess]:
    (state, { payload }) => payload
}, defaultData);

const error = handleActions({
  [currenciesFetchRequest]: () => null,
  [currenciesFetchRequestSuccess]: () => null,
  [currenciesFetchRequestFailure]: (_, { payload }) => payload,
}, defaultError);


export default combineReducers({
  fetching,
  data,
  error,
});
