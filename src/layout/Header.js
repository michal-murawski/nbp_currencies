import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import { HeaderStyles } from './styles';

export const headerTitle = 'Wybierz swoje ulubione waluty';

const Header = props => {
  const { classes, children } = props;

  return (
    <AppBar position="static" color="default">
      <Typography variant="display3" className={classes.title}>
        Wybierz swoje ulubione waluty
      </Typography>
      {children}
    </AppBar>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const HeaderRaw = Header;

export default withStyles(HeaderStyles)(Header);
