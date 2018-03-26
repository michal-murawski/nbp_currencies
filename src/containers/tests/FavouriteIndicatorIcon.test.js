import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import IconLoader from 'components/IconLoader';
import Favorite from 'material-ui-icons/Favorite';
import NotFavorite from 'material-ui-icons/FavoriteBorder';

import { FavouriteIndicatorIconRaw } from '../FavouriteIndicatorIcon';

describe('containers/FavouriteIndicatorIcon', () => {
  it('should render properly with Favourites Icon', () => {
    const wrapper = shallow(
      <FavouriteIndicatorIconRaw favouriteId={1} code="PLN" />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render NotFavorite icon', () => {
    const wrapper = shallow(<FavouriteIndicatorIconRaw code="PLN" />);

    expect(wrapper.find(NotFavorite)).toHaveLength(1);
    expect(wrapper.find(Favorite)).toHaveLength(0);
  });

  it('should render IconLoader if fetching', () => {
    const wrapper = shallow(
      <FavouriteIndicatorIconRaw code="PLN" favouritesFetching />
    );

    expect(wrapper.find(IconLoader)).toHaveLength(1);
    expect(wrapper.find(NotFavorite)).toHaveLength(0);
    expect(wrapper.find(Favorite)).toHaveLength(0);
  });
});
