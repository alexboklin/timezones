import { combineReducers } from 'redux';
import cities from './cities';
import citySuggestions from './citySuggestions';

const rootReducer = combineReducers({
  cities,
  citySuggestions
});

export default rootReducer