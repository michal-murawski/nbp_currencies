import React from 'react';
import { shallow } from 'enzyme';
import { AppRaw } from '../App';

const mockCurrenciesFetch = jest.fn();
const mockFavouritesFetch = jest.fn();

describe('containers/App', () => {
  it('should call two methods from props', () => {
    shallow(
      <AppRaw
        currenciesFetchRequest={mockCurrenciesFetch}
        favouritesFetchRequest={mockFavouritesFetch}
      />
    );

    expect(mockCurrenciesFetch).toHaveBeenCalledTimes(1);
    expect(mockFavouritesFetch).toHaveBeenCalledTimes(1);
  });
});
