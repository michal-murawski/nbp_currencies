import { createAction } from 'redux-actions';

export const favouritesFetchRequest = createAction('favourites/fetch');
export const favouritesFetchRequestSuccess = createAction('favourites/fetch-success');
export const favouritesFetchRequestFailure = createAction('favourites/fetch-failure');

export const favouritesAddRequest = createAction('favourites/add-fetch');
export const favouritesAddRequestSuccess = createAction('favourites/add-fetch-success');
export const favouritesAddRequestFailure = createAction('favourites/add-fetch-failure');

export const favouritesRemoveRequest = createAction('favourites/remove-fetch');
export const favouritesRemoveRequestSuccess = createAction('favourites/remove-fetch-success');
export const favouritesRemoveRequestFailure = createAction('favourites/remove-fetch-failure');
