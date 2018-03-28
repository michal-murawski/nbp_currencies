import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { IconLoaderRaw } from '../IconLoader';

const mockClasses = { loader: 'test_class' };

describe('components/IconLoader', () => {
  it('should render properly', () => {
    const wrapper = shallow(<IconLoaderRaw classes={mockClasses} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
