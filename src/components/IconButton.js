import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButtonMUI from 'material-ui/IconButton';

const styles = theme => ({
  root: {
    width: 30,
    height: 30,
    fontSize: '1.2rem',
  },
});

function IconButton({ children, classes, onClick }) {
  return (
    <IconButtonMUI classes={{ root: classes.root }} onClick={onClick}>
      {children}
    </IconButtonMUI>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default withStyles(styles)(IconButton);
