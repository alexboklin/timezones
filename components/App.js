import React from 'react';
import CityInput from './CityInput';
import CityList from './CityList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cityListActions from '../redux/actions/cities/list';
import * as citySuggestionsActions from '../redux/actions/cities/suggestions';

// TODO: update comments
// cities comes from mapStateToProps; actions come from mapDispatchToProps.
// That is, we inject the "cities" slice of the state (and listen to it)
// and all action creators as actions into App.
const App = ({ cityList, citySuggestions, cityListActions, citySuggestionsActions }) => (
    <div>
        <br/>
        <CityInput
            cityListActions={cityListActions}
            citySuggestionsActions={citySuggestionsActions}
            cityList={cityList}
            citySuggestions={citySuggestions}/>
        <br/>
        <CityList
            cityListActions={cityListActions}
            cityList={cityList}/>
    </div>
);

// The component will subscribe to Redux store updates.
// Any time it updates, mapStateToProps will be called.
const mapStateToProps = state => ({
    cityList: state.cityList,
    citySuggestions: state.citySuggestions
});

// bindActionCreators turns an object whose values are action creators,
// into an object with the same keys, but with every action creator wrapped into a dispatch call
// so they may be invoked directly.
// dispatch is injected by react-redux, so we can do this: let { dispatch } = this.props
const mapDispatchToProps = dispatch => ({
    cityListActions: bindActionCreators(cityListActions, dispatch),
    citySuggestionsActions: bindActionCreators(citySuggestionsActions, dispatch),
});

// connect connects a React component to a Redux store and returns a React component class that injects
// state and action creators into your component according to the specified options.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);