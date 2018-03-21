import { prop, sort, ascend, descend } from 'ramda';


export function sortArrayAscOrDesc(searchParameter, direction, collection) {
  const sortDirection = direction === 'asc' ? ascend : descend;

  return sort(
    sortDirection(prop(searchParameter)),
    collection
  )
}
