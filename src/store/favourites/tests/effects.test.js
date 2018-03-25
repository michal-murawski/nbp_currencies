import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from 'utils/api';
import { favourites } from 'tests/testData';
import {
  favouritesAddRequest,
  favouritesAddRequestFailure,
  favouritesAddRequestSuccess,
  favouritesFetchRequest,
  favouritesFetchRequestFailure,
  favouritesFetchRequestSuccess,
  favouritesRemoveAllRequest,
  favouritesRemoveRequest,
} from '../actions';
import favouritesEffects, {
  workerFavouritesFetchRequest,
  workerFavouritesAddRequest,
  workerFavouritesRemoveRequest,
  workerFavouritesRemoveAllRequest,
} from '../effects';

describe('Favourites Effects', () => {
  const worker = favouritesEffects();

  it('should start a task to watch for `favouritesFetchRequest` action', () => {
    const expected = takeEvery(favouritesFetchRequest, workerFavouritesFetchRequest);
    const actual = worker.next().value;

    expect(actual).toEqual(expected);
  });

  it('should start a task to watch for `favouritesFetchRequest` action', () => {
    const expected = takeEvery(favouritesAddRequest, workerFavouritesAddRequest);
    const actual = worker.next().value;

    expect(actual).toEqual(expected);
  });

  it('should start a task to watch for `favouritesRemoveRequest` action', () => {
    const expected = takeEvery(favouritesRemoveRequest, workerFavouritesRemoveRequest);
    const actual = worker.next().value;

    expect(actual).toEqual(expected);
  });

  it('should start a task to watch for `favouritesRemoveAllRequest` action', () => {
    const expected = takeLatest(
      favouritesRemoveAllRequest,
      workerFavouritesRemoveAllRequest
    );
    const actual = worker.next().value;

    expect(actual).toEqual(expected);
  });
});

describe('Favourites Effects - Favourites Load Request', () => {
  const worker = workerFavouritesFetchRequest(favouritesFetchRequest());

  it('should call necessary API methods', () => {
    const expected = call(Api.favourites.getFavourites);
    const actual = worker.next().value;

    expect(actual).toEqual(expected);
  });

  it('should put `favouritesFetchRequestSuccess` action', () => {
    const expected = put(favouritesFetchRequestSuccess(favourites));
    const actual = worker.next(favourites).value;

    expect(actual).toEqual(expected);
  });

  it('should call `favouritesFetchRequestFailure` action', () => {
    const error = new Error('test');
    const expected = put(favouritesFetchRequestFailure(error));
    const actual = worker.throw(error).value;

    expect(actual).toEqual(expected);
  });
});

describe('Favourites Effects - Favourites Add Request', () => {
  const newFavourite = favourites[0];
  const worker = workerFavouritesAddRequest(favouritesFetchRequest(newFavourite));

  it('should call necessary API methods', () => {
    const expected = call(Api.favourites.addFavourites, newFavourite);
    const actual = worker.next().value;

    expect(actual).toEqual(expected);
  });

  it('should put `favouritesAddRequestSuccess` action', () => {
    const expected = put(favouritesAddRequestSuccess(newFavourite));
    const actual = worker.next(newFavourite).value;

    expect(actual).toEqual(expected);
  });

  it('should call `favouritesAddRequestFailure` action', () => {
    const error = new Error('test');
    const expected = put(favouritesAddRequestFailure(error));
    const actual = worker.throw(error).value;

    expect(actual).toEqual(expected);
  });
});
