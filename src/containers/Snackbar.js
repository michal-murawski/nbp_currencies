import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import SnackbarMUI from 'material-ui/Snackbar';
import { errorsClearMessage as errorsClearMessageAction } from 'store/errors/actions';
import { getValueByPath } from 'utils/dataHelpers';

function Snackbar({ message, errorsClearMessage }) {
  return (
    <SnackbarMUI
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(message)}
      autoHideDuration={6000}
      onClose={errorsClearMessage}
      SnackbarContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={message}
      action={[
        <Button
          key="close"
          color="secondary"
          size="small"
          onClick={errorsClearMessage}
        >
          Close
        </Button>
      ]}
    />
  );
}

Snackbar.propTypes = {
  message: PropTypes.string,
};

const mapStateToProsp = ({
  message: getValueByPath(['errors', 'message']),
});

const mapDispatchToProsp = (dispatch) => ({
  errorsClearMessage: () => dispatch(errorsClearMessageAction()),
});


export default connect(mapStateToProsp, mapDispatchToProsp)(Snackbar);
