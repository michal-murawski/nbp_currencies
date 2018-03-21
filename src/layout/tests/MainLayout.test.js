import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../Header';

import { MainLayouRaw } from '../MainLayout';

const TestChild = () => <div>Test child text</div>;
const mockClasses = { title: 'title_class' };


describe('layout/MainLayouRaw', () => {
  const wrapper = shallow(
    <MainLayouRaw classes={mockClasses}>
      <TestChild />
      <TestChild />
      <TestChild />
    </MainLayouRaw>
  );

  it('should render properly the MainLayouRaw', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Header', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
