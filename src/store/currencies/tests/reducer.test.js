import currenciesReducer from '../reducer';

describe('store/currencies/reducer', () => {
  it('should return initial state', () => {
    const reducer = currenciesReducer(undefined, {});

    expect(reducer).toBeDefined();
  });
});