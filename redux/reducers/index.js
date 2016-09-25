import { combineReducers } from 'redux';
import cityList from './cities/list';
import citySuggestions from './cities/suggestions';

const rootReducer = combineReducers({
  cityList,
  citySuggestions
});

export default rootReducer