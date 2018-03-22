import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';

import {
  currenciesFetchRequest,
  currenciesFetchRequestFailure,
  currenciesFetchRequestSuccess,
} from './actions';

import currenciesEffects, { workerCurrenciesFetchRequest } from '../effects';

describe('Currencies Effects', () => {
  const worker = currenciesEffects();

  it('should start a task to watch for `currenciesFetchRequest` action', () => {
    const expected = takeLatest(currenciesFetchRequest);
    const actual = worker.next().value;

    expect(actual).toEqual(expected);
  });
});
