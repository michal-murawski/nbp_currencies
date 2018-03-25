import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import NavigationLink from './NavigationLink';

const Navigation = props => {
  return (
    <Toolbar>
      <NavigationLink exact to="/">
        Currencies
      </NavigationLink>
      <NavigationLink to="/favourites">Favourites</NavigationLink>
    </Toolbar>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object,
};

export default Navigation;
