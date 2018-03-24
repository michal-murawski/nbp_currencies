import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import Api from 'utils/api';

import {
  currenciesFetchRequest,
  currenciesFetchRequestFailure,
  currenciesFetchRequestSuccess,
} from './actions';


export function* workerCurrenciesFetchRequest() {
  try {
    const response = yield call(Api.currencies.getCurrencies);
    const data = response[0] && response[0].rates;

    yield put(currenciesFetchRequestSuccess(data));
  } catch (exception) {
    yield put(currenciesFetchRequestFailure(exception))
  }
}

export default function* currenciesEffects() {
  yield takeLatest(currenciesFetchRequest, workerCurrenciesFetchRequest);
}