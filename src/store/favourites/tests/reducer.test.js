import favouritesReducer from '../reducer';

describe('store/favourites/reducer', () => {
  it('should return initial state', () => {
    const reducer = favouritesReducer(undefined, {});

    expect(reducer).toBeDefined();
  });

  it('should add a favourite currency', () => {
    const startState = {
      favourites: [],
      fetching: false,
    };
    const expectedState = {
      favourites: ['brawo'],
      fetching: false,
    };
    const action = {
      type: 'ADD_FAVOURITE',
      payload: 'brawo',
    };
    const result = favouritesReducer(startState, action);

    expect(result).toEqual(expectedState);
  });
});
