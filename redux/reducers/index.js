import { combineReducers } from 'redux';
import cityList from './cities/list';
import citySuggestions from './cities/suggestions';
import deletedCity from './cities/deletedCity';
import showNotification from './cities/notification';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    cityList,
    citySuggestions,
    deletedCity,
    showNotification,
    form: formReducer
});

export default rootReducer