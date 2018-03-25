import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import App from 'containers/App';
import theme from 'styles/theme';
import store from './store/index';
import response from './response.json';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <App currencies={response} />
        </CssBaseline>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
