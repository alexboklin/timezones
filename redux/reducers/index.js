import { combineReducers } from 'redux';
import timezonesReducer from './timezonesReducer';

const rootReducer = combineReducers({
  timezones: timezonesReducer,
})

export default rootReducer