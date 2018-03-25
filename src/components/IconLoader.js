import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  loader: {
    margin: `0 ${theme.gutters[6]}`,
  },
});

const IconLoader = ({ classes }) => (
  <CircularProgress className={classes.loader} size={15} thickness={1} />
);

IconLoader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const IconLoaderRaw = IconLoader;

export default withStyles(styles)(IconLoader);
