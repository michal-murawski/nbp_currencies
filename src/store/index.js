import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import currenciesReducer from './currencies/reducer';
import favouritesReducer from './favourites/reducer';
import favouritesEffects from './favourites/effects';
import currenciesEffects from './currencies/effects';


const reducer = combineReducers({
  currencies: currenciesReducer,
  favourites: favouritesReducer,
});
const saga = createSagaMiddleware();
const enhancer = applyMiddleware(saga);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  reducer,
  {},
  composeEnhancers(enhancer)
);

saga.run(favouritesEffects);
saga.run(currenciesEffects);

export default configureStore;
