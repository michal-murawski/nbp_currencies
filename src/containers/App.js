import React, { Component } from 'react';
import MainLayout from 'layout/MainLayout';
import { Route, Switch } from 'react-router-dom';
import Api from 'middleware/api';

class App extends Component {
  state = {
    currencies: false,
  }

  async componentDidMount() {
    const currencies = await Api.getCurrencies();

    this.setState({ currencies });
  }

  render() {
    return (
      <MainLayout className="App">
        <Switch>
          <Route exact path='/' component={() => <div>Elo dom</div>} />
          <Route path='/favourites' component={() => <div>Rlo ulubione</div>} />
          <Route path="*" component={() => <div>Route not found</div>} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
