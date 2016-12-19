import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

// TODO: sync initialState with localStorage if necessary
const configureStore = () => {
    const middlewares = [thunk];

    return createStore(
        rootReducer,
        // initialState,
        compose(
            applyMiddleware(...middlewares)
        )
    );
};

export default configureStore;