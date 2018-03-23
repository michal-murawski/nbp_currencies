import { takeEvery, call, put } from 'redux-saga/effects';
import Api from 'utils/api';
import {
  favouritesFetchRequest,
  favouritesAddRequest,
  favouritesRemoveRequest,
  favouritesFetchRequestSuccess,
  favouritesAddRequestSuccess,
  favouritesRemoveRequestSuccess,
  favouritesFetchRequestFailure,
  favouritesAddRequestFailure,
  favouritesRemoveRequestFailure,
} from './actions';

export function* workerFavouritesFetchRequest() {
  try {
    const response = yield call(Api.favourites.getFavourites);

    yield put(favouritesFetchRequestSuccess(response))
  } catch (exception) {
    yield put(favouritesFetchRequestFailure(exception))
  }
}

export function* workerFavouritesAddRequest({ payload }) {
  try {
    const response = yield call(Api.favourites.addFavourites, payload);

    yield put(favouritesAddRequestSuccess(response))
  } catch (exception) {
    yield put(favouritesRemoveRequestFailure(exception))
  }
}

export function* workerFavouritesRemoveRequest({ payload }) {
  try {
    const response = yield call(Api.favourites.deleteFavourites, payload);

    yield put(favouritesRemoveRequestSuccess(response))
  } catch (exception) {
    yield put(favouritesAddRequestFailure(exception))
  }
}

export default function*() {
  yield takeEvery(favouritesFetchRequest, workerFavouritesFetchRequest);
  yield takeEvery(favouritesAddRequest, workerFavouritesAddRequest);
  yield takeEvery(favouritesRemoveRequest, workerFavouritesRemoveRequest);
}
