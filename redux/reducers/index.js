import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
  timezones: citiesReducer
});

export default rootReducer