import React from 'react';
import { shallow } from 'enzyme';
import Table from 'containers/Table/Table';
import CurrenciesPage from '../CurrenciesPage';

describe('pages/CurrenciesPage', () => {
  it('should render properly', () => {
    expect(CurrenciesPage).toBeDefined();
  });

  it('should contain Table', () => {
    const wrapper = shallow(<CurrenciesPage />);

    expect(wrapper.find(Table)).toHaveLength(1);
  });
});
