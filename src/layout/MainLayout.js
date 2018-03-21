import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation/Navigation';
import Header from './Header';

const MainLayout = (props) => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
      {props.children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const MainLayouRaw = MainLayout;

export default MainLayout;
