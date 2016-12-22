import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { persistStore } from 'redux-persist';

import configureStore from './store/configureStore';
import App from '../components/App';

const store = configureStore();

const config = {
    whitelist: ['cityList']
};

// TODO: remove when done testing.
console.log(`TEST_KEY is: ${process.env.TEST_KEY}`);
console.log(`SECRET_API_KEY is: ${process.env.SECRET_API_KEY}`);

export default class AppProvider extends Component {

    constructor() {
        super();
        this.state = {rehydrated: false};
    }

    componentWillMount() {
        persistStore(store, config, () => {
            this.setState({rehydrated: true})
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.rehydrated ?
                        <Provider store={store}>
                            <MuiThemeProvider>
                                <App />
                            </MuiThemeProvider>
                        </Provider>
                        :
                        null
                }
            </div>
        )
    }
}