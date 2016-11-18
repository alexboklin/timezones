import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// TODO: sync initialState with localStorage if necessary
// See: https://github.com/gaearon/redux-devtools/issues/121 and https://github.com/elgerlambert/redux-localstorage
const configureStore = () => {
    const middlewares = [];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
        // Note: you can supply options to `createLogger()`
    }

    middlewares.push(thunk);

    // Use compose if need to add more enhancers: http://redux.js.org/docs/api/compose.html
    // On how to setup Redux DevTools, see: https://github.com/zalmoxisus/redux-devtools-extension#usage
    return createStore(
        rootReducer,
        // initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );
};

export default configureStore;