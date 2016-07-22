import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';

let finalCreateStore = compose(
  applyMiddleware(logger()) // + applyMiddleware(thunk),
)(createStore);

export default function configureStore(initialState = { cities: [] }) {
  return finalCreateStore(rootReducer, initialState)
};