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

export function* fworkerFvouritesAddRequest({ payload }) {

}

export function* workerfavouritesRemoveRequest({ payload }) {

}

export default function*() {
  yield takeEvery(favouritesFetchRequest, workerFavouritesFetchRequest);
}
