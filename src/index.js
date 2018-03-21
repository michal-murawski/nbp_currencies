import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline  from 'material-ui/CssBaseline';
import { MuiThemeProvider  } from 'material-ui/styles';
import App from 'containers/App';
import theme from 'styles/theme';

ReactDOM.render(
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Route path="/" component={App} />
        </CssBaseline>
      </MuiThemeProvider>
    </Router>
    , document.getElementById('root'));
