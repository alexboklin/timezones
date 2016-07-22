import React from 'react';
import CityInput from './CityInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <MuiThemeProvider>
        <div>
            <br/>
            <CityInput/>
        </div>
    </MuiThemeProvider>
);

export default App;