// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app-component/app';
import Home from './components/home-component/home';
import Settings from './components/settings-component/settings';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/settings" component={Settings} />
  </Route>
);
