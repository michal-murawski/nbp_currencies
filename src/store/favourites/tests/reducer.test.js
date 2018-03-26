import { prop, propEq, reject } from 'ramda';
import { favourites } from 'tests/testData';
import reducer, { defaultData, defaultFetching } from '../reducer';
import {
  favouritesFetchRequestSuccess,
  favouritesFetchRequest,
  favouritesRemoveRequestSuccess,
} from '../actions';

describe('Favourites Reducer', () => {
  it('should handle `favouritesFetchRequest` correctly', () => {
    const expected = {
      data: defaultData,
      fetching: true,
    };

    const actual = reducer(
      {
        fetching: defaultFetching,
        data: defaultData,
      },
      favouritesFetchRequest()
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `favouritesFetchRequestSuccess` correctly', () => {
    const expected = {
      data: favourites,
      fetching: false,
    };

    const actual = reducer(
      {
        data: defaultData,
        fetching: true,
      },
      favouritesFetchRequestSuccess(favourites)
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `favouritesRemoveRequestSuccess` correctly', () => {
    const itemIdToRemove = prop('id', favourites[0]);
    const expected = {
      data: reject(propEq('id', itemIdToRemove), favourites),
      fetching: false,
    };

    const actual = reducer(
      {
        data: favourites,
      },
      favouritesRemoveRequestSuccess(itemIdToRemove)
    );

    expect(actual).toEqual(expected);
  });
});
