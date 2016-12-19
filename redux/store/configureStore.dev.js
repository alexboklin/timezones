import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// TODO: sync initialState with localStorage if necessary
const configureStore = () => {
    const middlewares = [thunk];

    return createStore(
        rootReducer,
        // initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );
};

export default configureStore;