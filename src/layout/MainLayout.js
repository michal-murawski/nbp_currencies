import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation/Navigation';
import Header from './Header';
import Content from './Content';

const MainLayout = props => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
      <Content>{props.children}</Content>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const MainLayouRaw = MainLayout;

export default MainLayout;
