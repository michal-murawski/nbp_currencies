import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PageLoaderRaw } from '../PageLoader';

const mockClasses = { wrapper: 'test_value' };

describe('components/PageLoader', () => {
  it('should render properly', () => {
    const wrapper = shallow(<PageLoaderRaw classes={mockClasses} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
