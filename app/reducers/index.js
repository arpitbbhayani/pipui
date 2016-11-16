// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import settings from './settings';

const rootReducer = combineReducers({
  counter,
  settings,
  routing
});

export default rootReducer;
