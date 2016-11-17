// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.production'); // eslint-disable-line global-require
// } else {
//   module.exports = require('./configureStore.development'); // eslint-disable-line global-require
// }

import { createStore } from 'redux';
import rootReducer from '../reducers';
const appStore = createStore(rootReducer, window.__INITIAL_STATE__);

export default appStore;
