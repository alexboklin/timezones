import React from 'react';
import CityInput from './CityInput';
import CityList from './CityList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

// TODO: get rid of return
const AppStart = ({ cities, actions }) => {
    return(
        <div>
            <br/>
            <CityInput onSubmit={actions.addCity}/>
            <br/>
            <CityList cities={cities}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

// TODO: App vs AppStart -- resolve
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppStart);

export default App;