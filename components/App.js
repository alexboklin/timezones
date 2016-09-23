import React from 'react';
import CityInput from './CityInput';
import CityList from './CityList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cityActions from '../redux/actions/cities';
import * as citySuggentionActions from '../redux/actions/citySuggestions';

// TODO: update comments
// cities comes from mapStateToProps; actions come from mapDispatchToProps.
// That is, we inject the "cities" slice of the state (and listen to it)
// and all action creators as actions into App.
const App = ({ cities, citySuggestions, cityActions, citySuggentionActions }) => (
    <div>
        <br/>
        <CityInput
            cityActions={cityActions}
            citySuggentionActions={citySuggentionActions}
            cities={cities}
            citySuggestions={citySuggestions}/>
        <br/>
        <CityList
            cityActions={cityActions}
            cities={cities}/>
    </div>
);

// The component will subscribe to Redux store updates.
// Any time it updates, mapStateToProps will be called.
const mapStateToProps = state => ({
    cities: state.cities,
    citySuggestions: state.citySuggestions
});

// bindActionCreators turns an object whose values are action creators,
// into an object with the same keys, but with every action creator wrapped into a dispatch call
// so they may be invoked directly.
// dispatch is injected by react-redux, so we can do this: let { dispatch } = this.props
const mapDispatchToProps = dispatch => ({
    cityActions: bindActionCreators(cityActions, dispatch),
    citySuggentionActions: bindActionCreators(citySuggentionActions, dispatch),
});

// connect connects a React component to a Redux store and returns a React component class that injects
// state and action creators into your component according to the specified options.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);