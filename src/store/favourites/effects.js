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
  favouritesRemoveAllRequestFailure,
} from './actions';

export function* workerFavouritesFetchRequest() {
  try {
    const response = yield call(Api.favourites.getFavourites);

    yield put(favouritesFetchRequestSuccess(response));
  } catch (exception) {
    yield put(favouritesFetchRequestFailure(exception));
  }
}

export function* workerFavouritesAddRequest({ payload: code }) {
  try {
    const response = yield call(Api.favourites.addFavourites, code);

    yield put(favouritesAddRequestSuccess(response));
  } catch (exception) {
    exception.code = code;

    yield put(favouritesAddRequestFailure(exception));
  }
}

export function* workerFavouritesRemoveRequest({ payload: favouriteCurrency }) {
  try {
    yield call(Api.favourites.deleteFavourites, favouriteCurrency.id);

    yield put(favouritesRemoveRequestSuccess(favouriteCurrency));
  } catch (exception) {
    exception.code = favouriteCurrency.code;

    yield put(favouritesRemoveRequestFailure(exception));
  }
}

export function* workerFavouritesRemoveAllRequest({ payload: deleteIds }) {
  try {
    const deleteApiCalls = deleteIds.map(id => call(Api.favourites.deleteFavourites, id));
    yield all(deleteApiCalls);

    yield put(favouritesRemoveAllRequestSuccess());
  } catch (exception) {
    exception.message = 'We could not remove all favourites currencies!';

    yield put(favouritesRemoveAllRequestFailure(exception));
  }
}

export default function*() {
  yield takeEvery(favouritesFetchRequest, workerFavouritesFetchRequest);
  yield takeEvery(favouritesAddRequest, workerFavouritesAddRequest);
  yield takeEvery(favouritesRemoveRequest, workerFavouritesRemoveRequest);
  yield takeLatest(favouritesRemoveAllRequest, workerFavouritesRemoveAllRequest);
}
