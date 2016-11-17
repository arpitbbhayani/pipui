// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import appStore from './store/configureStore';
import './app.global.css';


export default class MainContainer extends React.Component {
  constructor() {
    super();
    this.appStore = appStore;
    this.state = this.appStore.getState();
  }

  render() {
    const self = this;
    const history = syncHistoryWithStore(hashHistory, self.appStore);
    return (
      <div>
        <Provider store={self.appStore}>
          <Router history={history}>
            {routes}
          </Router>
        </Provider>,
      </div>
    );
  }
}


render(
  <MainContainer />,
  document.getElementById('root')
);
