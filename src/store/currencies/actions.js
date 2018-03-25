import { createAction } from 'redux-actions';

export const currenciesFetchRequest = createAction('currencies/fetch');
export const currenciesFetchRequestSuccess = createAction(
  'currencies/fetch-success'
);
export const currenciesFetchRequestFailure = createAction(
  'currencies/fetch-failure'
);
