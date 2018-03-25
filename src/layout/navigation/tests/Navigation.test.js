import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navigation from '../Navigation';
import NavigationLink from '../NavigationLink';

describe('layout/Navigation', () => {
  const wrapper = shallow(<Navigation />);

  it('should render properly the Navigation', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render NavigationLink', () => {
    expect(wrapper.find(NavigationLink)).toHaveLength(2);
  });
});
