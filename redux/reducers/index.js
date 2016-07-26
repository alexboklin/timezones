import { combineReducers } from 'redux';
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
  // TODO: use only cities (i.e., no cityReducer)?
  cities: cityReducer
});

export default rootReducer