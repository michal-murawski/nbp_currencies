import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  currenciesFetchRequest,
  currenciesFetchRequestFailure,
  currenciesFetchRequestSuccess,
} from './actions';

export const defaultFetching = false;
export const defaultData = [];

const fetching = handleActions(
  {
    [currenciesFetchRequest]: () => true,
    [currenciesFetchRequestFailure]: () => false,
    [currenciesFetchRequestSuccess]: () => false,
  },
  defaultFetching
);

const data = handleActions(
  {
    [currenciesFetchRequestSuccess]: (_, { payload }) => payload,
  },
  defaultData
);

export default combineReducers({
  fetching,
  data,
});
