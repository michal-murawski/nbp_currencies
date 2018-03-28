import React from 'react';
import { shallow } from 'enzyme';
import SnackbarMUI from 'material-ui/Snackbar';
import toJson from 'enzyme-to-json';

import { SnackbarRaw } from '../Snackbar';

const mockClearMessage = jest.fn();

describe('components/SnackbarRaw', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SnackbarRaw errorsClearMessage={mockClearMessage} />);
  });

  it('should render properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should be closed without message', () => {
    expect(wrapper.find(SnackbarMUI).props().open).toBe(false);
  });

  it('should be get open after passing message', () => {
    const message = 'Test message';
    expect(wrapper.find(SnackbarMUI).props().open).toBe(false);

    wrapper.setProps({ message });

    expect(wrapper.find(SnackbarMUI).props().open).toBe(true);
    expect(wrapper.find(SnackbarMUI).props().message).toEqual(message);
    expect(wrapper.props().message).toEqual(message);
  });

  it('should call proper function on button click', () => {
    expect(mockClearMessage).toHaveBeenCalledTimes(0);

    const snackbarCloseButton = wrapper.find(SnackbarMUI).props().action[0];
    shallow(snackbarCloseButton).simulate('click');

    expect(mockClearMessage).toHaveBeenCalledTimes(1);
  });
});
