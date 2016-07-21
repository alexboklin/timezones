import React from 'react';
import TimezoneInput from './TimezoneInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <MuiThemeProvider>
        <div>
            <br/>
            <TimezoneInput/>
        </div>
    </MuiThemeProvider>
);

export default App;