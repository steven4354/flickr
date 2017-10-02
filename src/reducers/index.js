import { combineReducers } from 'redux';
import SearchReducer from './reducer_search'

const rootReducer = combineReducers({
  photos: SearchReducer
});

export default rootReducer;
