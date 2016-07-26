import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// TODO: change initialState!
// See: http://redux.js.org/docs/basics/Reducers.html
// Also see: https://github.com/gaearon/normalizr
const initialState = {
  cities: []
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);