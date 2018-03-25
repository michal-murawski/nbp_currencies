import { prop, propEq, reject } from 'ramda';
import { favourites } from 'tests/testData';
import reducer, {
  defaultData,
  defaultFetching,
  defaultSavingFavourites,
} from '../reducer';
import {
  favouritesFetchRequestSuccess,
  favouritesFetchRequest,
  favouritesRemoveRequest,
  favouritesRemoveRequestFailure,
  favouritesRemoveRequestSuccess,
} from '../actions';

describe('Favourites Reducer', () => {
  it('should handle `favouritesFetchRequest` correctly', () => {
    const expected = {
      data: defaultData,
      fetching: true,
      savingFavourites: defaultSavingFavourites,
    };

    const actual = reducer(
      {
        fetching: defaultFetching,
        savingFavourites: defaultSavingFavourites,
        data: defaultData,
      },
      favouritesFetchRequest()
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `favouritesFetchRequestSuccess` correctly', () => {
    const expected = {
      data: favourites,
      savingFavourites: defaultSavingFavourites,
      fetching: false,
    };

    const actual = reducer(
      {
        data: defaultData,
        savingFavourites: defaultSavingFavourites,
        fetching: true,
      },
      favouritesFetchRequestSuccess(favourites)
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `favouritesRemoveRequest` correctly', () => {
    const expected = {
      savingFavourites: [prop('code', favourites[0])],
      data: favourites,
      fetching: false,
    };

    const actual = reducer(
      {
        savingFavourites: defaultSavingFavourites,
        data: favourites,
      },
      favouritesRemoveRequest(favourites[0])
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `favouritesRemoveRequestSuccess` correctly', () => {
    const itemIdToRemove = prop('id', favourites[0]);
    const expected = {
      savingFavourites: [],
      data: reject(propEq('id', itemIdToRemove), favourites),
      fetching: false,
    };

    const actual = reducer(
      {
        savingFavourites: [prop('code', favourites[0])],
        data: favourites,
      },
      favouritesRemoveRequestSuccess(favourites[0])
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `favouritesRemoveRequestFailure` correctly', () => {
    const expected = {
      savingFavourites: [],
      data: favourites,
      fetching: false,
    };

    const actual = reducer(
      {
        savingFavourites: [prop('code', favourites[0])],
        data: favourites,
      },
      favouritesRemoveRequestFailure(favourites[0])
    );

    expect(actual).toEqual(expected);
  });
});
