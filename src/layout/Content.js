import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { ContentStyles } from './styles';

const Content = props => {
  const { classes, children } = props;

  return (
    <Grid item md={8} classes={{ typeItem: classes.content }}>
      {children}
    </Grid>
  );
};

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  classes: PropTypes.object.isRequired,
};

export const HeaderRaw = Content;

export default withStyles(ContentStyles)(Content);
