import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// TODO: check http://redux.js.org/docs/advanced/AsyncActions.html#indexjs
// TODO: check https://github.com/gaearon/redux-thunk#installation
let finalCreateStore = compose(
  applyMiddleware(
      logger(),
      thunk
  )
)(createStore);

export default function configureStore(initialState = {}) {
  return finalCreateStore(rootReducer, initialState)
};