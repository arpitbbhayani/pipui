// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import settings from './settings';
import notificationCenter from './notificationCenter';

export const rootReducer = combineReducers({
  settings,
  notificationCenter,
  routing
});

export default rootReducer;
