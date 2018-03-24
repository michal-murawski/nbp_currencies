import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100hv',
    marginTop: theme.gutters[36]
  }
});

const PageLoader = ({ classes }) => (
  <div className={classes.wrapper}>
    <CircularProgress size={70} thickness={1} />
  </div>
);

PageLoader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PageLoader);
