import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { NavigationLinkRaw } from '../NavigationLink';

const mockClasses = { root: 'test_class ' };

describe('layout/NavigationLink', () => {
  it('should render properly the NavigationLink', () => {
    const ChildDiv = () => <div>Child test</div>;

    const wrapper = shallow(
      <NavigationLinkRaw to="/test" classes={mockClasses}>
        <ChildDiv />
      </NavigationLinkRaw>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
