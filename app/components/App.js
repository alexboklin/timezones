import React from 'react';
import AutoCompleteForm from './AutoCompleteForm';
import CityInputSnackbar from './CityInputSnackbar';
import CityList from './CityList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cityListActions from '../redux/actions/cities/list';
import * as citySuggestionsActions from '../redux/actions/cities/suggestions';
import * as notificationActions from '../redux/actions/cities/notification'

// Here, we inject the slices of the state (and listen to it) via mapStateToProps
// and all action creators as props.
const App = ({ hasJustAddedCity,
    cityList, citySuggestions,
    cityListActions, citySuggestionsActions,
    showNotification, notificationActions, notificationText }) => (
    <div>
        <AutoCompleteForm
            cityListActions={cityListActions}
            citySuggestionsActions={citySuggestionsActions}
            cityList={cityList}
            citySuggestions={citySuggestions}
        />

        <CityInputSnackbar
            cityListActions={cityListActions}
            cityList={cityList}
            notificationActions={notificationActions}
            showNotification={showNotification}
            notificationText={notificationText}
            hasJustAddedCity={hasJustAddedCity}
        />

        <CityList
            cityListActions={cityListActions}
            cityList={cityList}
        />

    </div>
);

// The component will subscribe to Redux store updates.
// Any time it updates, mapStateToProps will be called.
const mapStateToProps = state => ({
    cityList: state.cityList,
    citySuggestions: state.citySuggestions,
    deletedCity: state.deletedCity,
    showNotification: state.showNotification,
    notificationText: state.notificationText,
    hasJustAddedCity: state.hasJustAddedCity
});

// bindActionCreators turns an object whose values are action creators,
// into an object with the same keys, but with every action creator wrapped into a dispatch call
// so they may be invoked directly.
// dispatch is injected by react-redux, so we can do this: let { dispatch } = this.props
const mapDispatchToProps = dispatch => ({
    cityListActions: bindActionCreators(cityListActions, dispatch),
    citySuggestionsActions: bindActionCreators(citySuggestionsActions, dispatch),
    notificationActions: bindActionCreators(notificationActions, dispatch)
});

// connect connects a React component to a Redux store and returns a React component class that injects
// state and action creators into your component according to the specified options.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);