import { combineReducers } from 'redux';
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
  timezones: cityReducer
});

export default rootReducer