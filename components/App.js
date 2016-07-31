import React from 'react';
import CityInput from './CityInput';
import CityList from './CityList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {

    return(
        <MuiThemeProvider>
            <div>
                <br/>
                <CityInput/>
                <br/>
                <CityList cities={[]}/>
            </div>
        </MuiThemeProvider>
    )
};

export default App;