import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import SnackbarMUI from 'material-ui/Snackbar';
import { errorsClearMessage as errorsClearMessageAction } from 'store/errors/actions';
import { getValueByPath } from 'utils/dataHelpers';

class Snackbar extends React.PureComponent {
  handleOnClick = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.props.errorsClearMessage();
  };

  render() {
    const { message } = this.props;

    return (
      <SnackbarMUI
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(message)}
        autoHideDuration={6000}
        onClose={this.handleOnClick}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={message}
        action={[
          <Button key="close" color="secondary" size="small" onClick={this.handleOnClick}>
            Close
          </Button>,
        ]}
      />
    );
  }
}

Snackbar.propTypes = {
  message: PropTypes.string,
  errorsClearMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: getValueByPath(['errors', 'message'], state),
});

const mapDispatchToProps = dispatch => ({
  errorsClearMessage: () => dispatch(errorsClearMessageAction()),
});

export const SnackbarRaw = Snackbar;

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
