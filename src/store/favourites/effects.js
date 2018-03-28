import { takeEvery, takeLatest, call, put, all } from 'redux-saga/effects';
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
  favouritesRemoveAllRequest,
  favouritesRemoveAllRequestSuccess,
} from './actions';

export function* workerFavouritesFetchRequest() {
  try {
    const response = yield call(Api.favourites.getFavourites);

    yield put(favouritesFetchRequestSuccess(response));
  } catch (exception) {
    yield put(favouritesFetchRequestFailure(exception));
  }
}

export function* workerFavouritesAddRequest({ payload }) {
  try {
    const response = yield call(Api.favourites.addFavourites, payload);

    yield put(favouritesAddRequestSuccess(response));
  } catch (exception) {
    yield put(favouritesAddRequestFailure(exception));
  }
}

export function* workerFavouritesRemoveRequest({ payload }) {
  try {
    yield call(Api.favourites.deleteFavourites, payload.id);

    yield put(favouritesRemoveRequestSuccess(payload));
  } catch (exception) {
    yield put(favouritesRemoveRequestFailure(exception));
  }
}

export function* workerFavouritesRemoveAllRequest({ payload: deleteIds }) {
  try {
    const deleteApiCalls = deleteIds.map(id => call(Api.favourites.deleteFavourites, id));
    yield all(deleteApiCalls);

    yield put(favouritesRemoveAllRequestSuccess());
  } catch (exception) {
    yield put(favouritesRemoveRequestFailure(exception));
  }
}

export default function*() {
  yield takeEvery(favouritesFetchRequest, workerFavouritesFetchRequest);
  yield takeEvery(favouritesAddRequest, workerFavouritesAddRequest);
  yield takeEvery(favouritesRemoveRequest, workerFavouritesRemoveRequest);
  yield takeLatest(favouritesRemoveAllRequest, workerFavouritesRemoveAllRequest);
}
