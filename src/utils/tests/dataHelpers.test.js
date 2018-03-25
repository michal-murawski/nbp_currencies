import { prop, propEq, reverse } from 'ramda';
import { favourites } from 'tests/testData';
import { getFavouriteIdByCode, sortArray } from '../dataHelpers';

describe('utils/dataHelpers/sortArray', () => {
  const unsortedArray = [
    {
      id: 2,
      name: 'Alis',
    },
    {
      id: 1,
      name: 'Bob',
    },
    {
      id: 7,
      name: 'Zyta',
    },
    {
      id: 4,
      name: 'Kali',
    },
  ];

  const sortedAscById = [
    {
      id: 1,
      name: 'Bob',
    },
    {
      id: 2,
      name: 'Alis',
    },
    {
      id: 4,
      name: 'Kali',
    },
    {
      id: 7,
      name: 'Zyta',
    },
  ];

  const sortedAscByIName = [
    {
      id: 2,
      name: 'Alis',
    },
    {
      id: 1,
      name: 'Bob',
    },
    {
      id: 4,
      name: 'Kali',
    },
    {
      id: 7,
      name: 'Zyta',
    },
  ];

  it('should return sorted array by Id', () => {
    const sortedAsc = sortArray('id', 'asc', unsortedArray);
    const sortedDesc = sortArray('id', 'desc', unsortedArray);

    expect(sortedAsc).toEqual(sortedAscById);
    expect(sortedDesc).toEqual(reverse(sortedAscById));
  });

  it('should return sorted array by Name', () => {
    const sortedAsc = sortArray('name', 'asc', unsortedArray);
    const sortedDesc = sortArray('name', 'desc', unsortedArray);

    expect(sortedAsc).toEqual(sortedAscByIName);
    expect(sortedDesc).toEqual(reverse(sortedAscByIName));
  });

  it('should return just array without param', () => {
    const array = sortArray('', 'desc', unsortedArray);

    expect(array).toEqual(unsortedArray);
  });
});

describe('utils/dataHelpers/getFavouriteIdByCode', () => {
  it('should favourite currency for specific Id', () => {
    const expected = favourites[1];
    const expectedId = prop('id', expected);

    const favouriteId = getFavouriteIdByCode(prop('code', expected), favourites);
    expect(favouriteId).toEqual(expectedId);
  });
});
