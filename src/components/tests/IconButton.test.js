import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconButton from '../IconButton';

const mockOnClick = jest.fn();
const mockClasses = {
  root: 'test_class',
};
describe('components/IconButton', () => {
  let wrapper;
  const ChildElement = () => <div>Test value</div>;

  beforeEach(() => {
    wrapper = shallow(
      <IconButton onClick={mockOnClick} classes={mockClasses}>
        <ChildElement />
      </IconButton>
    );
  });

  it('should render properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should contain ChildElement and proper class', () => {
    expect(wrapper.find(ChildElement)).toHaveLength(1);
    expect(wrapper.props().classes.root.includes(mockClasses.root)).toBe(true);
  });

  it('should call onClick method', () => {
    expect(mockOnClick).toHaveBeenCalledTimes(0);

    wrapper.simulate('click');

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
