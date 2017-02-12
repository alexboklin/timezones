import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import rootReducer from '../reducers/rootReducer';

// TODO: sync initialState with localStorage if necessary
const configureStore = () => {
    const middlewares = [thunk];

    return createStore(
        rootReducer,
        // initialState,
        compose(
            applyMiddleware(...middlewares),
            autoRehydrate()
        )
    );
};

export default configureStore;