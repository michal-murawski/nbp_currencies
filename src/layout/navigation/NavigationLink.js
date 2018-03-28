import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { NavigationLinkStyles } from './styles';

const NavigationLink = props => {
  const { classes, children, ...otherProps } = props;
  return (
    <Button>
      <NavLink className={classes.root} activeClassName={classes.active} {...otherProps}>
        {children}
      </NavLink>
    </Button>
  );
};

NavigationLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export const NavigationLinkRaw = NavigationLink;

export default withStyles(NavigationLinkStyles)(NavigationLink);
