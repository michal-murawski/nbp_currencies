import { createAction } from 'redux-actions';

export const favouritesFetchRequest = createAction('favourites/fetch');
export const favouritesFetchRequestSuccess = createAction('favourites/fetch-success');
export const favouritesFetchRequestFailure = createAction('favourites/fetch-failure');

export const favouritesAddRequest = createAction('favourites/add-fetch');
export const favouritesAddRequestSuccess = createAction('favourites/add-success');
export const favouritesAddRequestFailure = createAction('favourites/add-failure');

export const favouritesRemoveRequest = createAction('favourites/remove-fetch');
export const favouritesRemoveRequestSuccess = createAction('favourites/remove-success');
export const favouritesRemoveRequestFailure = createAction('favourites/remove-failure');

export const favouritesRemoveAllRequest = createAction('favourites/remove-all-fetch');
export const favouritesRemoveAllRequestSuccess = createAction(
  'favourites/remove-all-success'
);
export const favouritesRemoveAllRequestFailure = createAction(
  'favourites/remove-all-failure'
);
