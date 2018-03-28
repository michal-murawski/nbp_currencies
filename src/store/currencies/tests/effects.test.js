import { put, call, takeLatest } from 'redux-saga/effects';
import Api from 'utils/api';
import { response, currencies } from 'tests/testData';
import {
  currenciesFetchRequest,
  currenciesFetchRequestFailure,
  currenciesFetchRequestSuccess,
} from '../actions';
import currenciesEffects, { workerCurrenciesFetchRequest } from '../effects';

describe('Currencies Effects', () => {
  const worker = currenciesEffects();

  it('should start a task to watch for `currenciesFetchRequest` action', () => {
    const expected = takeLatest(currenciesFetchRequest, workerCurrenciesFetchRequest);
    const actual = worker.next().value;

    expect(actual).toEqual(expected);
  });
});

describe('Currencies Effects - Currencies Load Request', () => {
  const worker = workerCurrenciesFetchRequest(currenciesFetchRequest());

  it('should call necessary API methods', () => {
    const expected = call(Api.currencies.getCurrencies);
    const actual = worker.next().value;

    expect(actual).toEqual(expected);
  });

  it('should call `currenciesFetchRequestSuccess` action', () => {
    const expected = put(currenciesFetchRequestSuccess(currencies));
    const actual = worker.next(response).value;

    expect(actual).toEqual(expected);
  });

  it('should call `currenciesFetchRequestFailure` action', () => {
    const error = new Error('test');
    const expected = put(currenciesFetchRequestFailure(error));
    const actual = worker.throw(error).value;

    expect(actual).toEqual(expected);
  });
});
