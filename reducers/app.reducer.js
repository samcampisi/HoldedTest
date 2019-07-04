import { combineReducers } from 'redux';
import tradingPairs from './tradingPairs.reducer';

const rootReducer = combineReducers({
  tradingPairs,
});

export default rootReducer;
