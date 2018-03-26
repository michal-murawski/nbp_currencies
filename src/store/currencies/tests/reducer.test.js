import { currencies } from 'tests/testData';
import reducer, { defaultData, defaultFetching } from '../reducer';
import {
  currenciesFetchRequestSuccess,
  currenciesFetchRequest,
} from '../actions';

describe('Currencies Reducer', () => {
  it('should handle `currenciesFetchRequest` correctly', () => {
    const expected = {
      data: defaultData,
      fetching: true,
    };

    const actual = reducer(
      {
        fetching: false,
        data: defaultData,
      },
      currenciesFetchRequest()
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `currenciesFetchRequestSuccess` correctly', () => {
    const expected = {
      data: currencies,
      fetching: defaultFetching,
    };

    const actual = reducer(
      {
        fetching: true,
        data: defaultData,
      },
      currenciesFetchRequestSuccess(currencies)
    );

    expect(actual).toEqual(expected);
  });
});
