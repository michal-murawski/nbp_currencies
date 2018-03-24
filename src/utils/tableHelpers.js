import { map, prop } from 'ramda';


export const getRowKeys = map(prop('key'));
