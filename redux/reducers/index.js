import { combineReducers } from 'redux';
import cityList from './cities/list';
import citySuggestions from './cities/suggestions';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    cityList,
    citySuggestions,
    form: formReducer
});

export default rootReducer