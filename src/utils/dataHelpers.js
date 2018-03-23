import { prop, sort, ascend, descend, find, propEq } from 'ramda';


export function sortArrayAscOrDesc(searchParameter, direction, collection) {
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
