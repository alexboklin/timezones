import { combineReducers } from 'redux';
import cityList from './cities/list';
import citySuggestions from './cities/suggestions';
import deletedCity from './cities/deletedCity';
import hasJustAddedCity from './cities/addingCity';
import { showNotification, notificationText } from './cities/notification';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    cityList,
    citySuggestions,
    deletedCity,
    showNotification,
    notificationText,
    hasJustAddedCity,
    form: formReducer
});

export default rootReducer