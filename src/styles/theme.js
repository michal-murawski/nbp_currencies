import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';

const theme = {
  palette: {
    success: green[500],
  },
  sizes: {
    tableIcon: 20,
  },
  gutters: {
    4: '4px',
    6: '6px',
    8: '8px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
    28: '28px',
    32: '32px',
    36: '36px',
    40: '40px',
  },
  transitionTime: '0.2s',
};

export default createMuiTheme(theme);
