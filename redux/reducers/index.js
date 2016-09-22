import { combineReducers } from 'redux';
import { cities, citySuggestions } from './cities';

const rootReducer = combineReducers({
  cities,
  citySuggestions
});

export default rootReducer