import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
import { Route, Switch } from 'react-router-dom';
import CurrenciesPage from 'pages/CurrenciesPage';
import FavouritesPage from 'pages/FavouritesPage';
import { favouritesFetchRequest } from 'store/favourites/actions';
import { currenciesFetchRequest } from 'store/currencies/actions';

class App extends React.Component {
  componentDidMount() {
    this.props.currenciesFetchRequest();
    this.props.favouritesFetchRequest();
  }

  render() {
    return (
      <MainLayout className="App">
        <Switch>
          <Route exact path='/' component={CurrenciesPage} />
          <Route path='/favourites' component={FavouritesPage} />
          <Route path="*" component={() => <div>404</div>} />
        </Switch>
      </MainLayout>
    );
  }
}

const matDispatchToProps = (dispatch) => ({
  favouritesFetchRequest: () => dispatch(favouritesFetchRequest()),
  currenciesFetchRequest: () => dispatch(currenciesFetchRequest())
});

export default withRouter(
  connect(null, matDispatchToProps)(App)
);
