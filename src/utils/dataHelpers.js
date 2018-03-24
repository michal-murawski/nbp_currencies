import {
  prop,
  sort,
  ascend,
  descend,
  find,
  propEq,
  view,
  lensPath,
  compose,
  innerJoin,
  map,
} from 'ramda';


export function sortArray(searchParameter, direction, collection) {
  const sortDirection = direction === 'asc' ? ascend : descend;

  return sort(
    sortDirection(prop(searchParameter)),
    collection
  )
}

export function getFavouriteIdByCode(code, favourites) {
  return prop('id', find(propEq('code', code))(favourites));
}

export const generateRandomNumber = () => Math.floor(Math.random() * 100000);

export const getValueByPath = (pathArray, store) => view(lensPath(pathArray), store);

export const filterCurrenciesByFavourites = (currencies) => compose(
  innerJoin(
    (currency, favourite) => propEq('code', favourite, currency),
    currencies
  ),
  map(prop('code'))
);
