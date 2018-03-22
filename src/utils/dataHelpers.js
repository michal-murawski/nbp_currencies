import { prop, sort, ascend, descend, map, propEq, without, any, __ } from 'ramda';


export function sortArrayAscOrDesc(searchParameter, direction, collection) {
  const sortDirection = direction === 'asc' ? ascend : descend;

  return sort(
    sortDirection(prop(searchParameter)),
    collection
  )
}


export const filterListWithout = (list, excepts, key) =>
  list.filter((item) => excepts.every((except) => item[key] !== except));
