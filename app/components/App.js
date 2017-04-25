import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AutoCompleteForm from './AutoCompleteForm';
import CityInputSnackbar from './CityInputSnackbar';
import CityList from './CityList';

import * as cityListActions from '../redux/actions/cities/list';
import * as citySuggestionsActions from '../redux/actions/cities/suggestions';
import * as notificationActions from '../redux/actions/cities/notification'

const App = ({ hasJustAddedCity,
    cityList, citySuggestions,
    cityListActions, citySuggestionsActions,
    showNotification, notificationActions, notificationText }) => (
    <div>
        <AutoCompleteForm { ...{ cityListActions, citySuggestionsActions, cityList, citySuggestions } } />

        <CityInputSnackbar { ...{ cityListActions, cityList, notificationActions, showNotification, notificationText, hasJustAddedCity} } />

        <CityList { ...{ cityListActions, cityList } } />
    </div>
);

const mapStateToProps = state => ({
    cityList: state.cityList,
    citySuggestions: state.citySuggestions,
    deletedCity: state.deletedCity,
    showNotification: state.showNotification,
    notificationText: state.notificationText,
    hasJustAddedCity: state.hasJustAddedCity
});

const mapDispatchToProps = dispatch => ({
    cityListActions: bindActionCreators(cityListActions, dispatch),
    citySuggestionsActions: bindActionCreators(citySuggestionsActions, dispatch),
    notificationActions: bindActionCreators(notificationActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);