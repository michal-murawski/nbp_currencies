import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import { HeaderRaw, headerTitle } from '../Header';

const TestChild = () => <div>Test child text</div>;
const mockClasses = { title: 'title_class' };

describe('layout/Header', () => {
  const wrapper = shallow(
    <HeaderRaw classes={mockClasses}>
      <TestChild />
    </HeaderRaw>
  );

  it('should render properly the header', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render AppBar and Typography', () => {
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(
      wrapper
        .find(Typography)
        .render()
        .text()
    ).toEqual(headerTitle);
  });
});
