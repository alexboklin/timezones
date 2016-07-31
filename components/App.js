import React from 'react';
import CityInput from './CityInput';
import CityList from './CityList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

const App = ({ cities, actions }) => (
    <div>
        <br/>
        <CityInput onSubmit={actions.addCity}/>
        <br/>
        <CityList cities={cities}/>
    </div>
);

const mapStateToProps = (state) => ({
    cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);