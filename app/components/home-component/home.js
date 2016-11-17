// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import NotificationCenter from '../notification-center-component/notificationCenter';


class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <h2>Home</h2>
          <Link to="/settings">Settings</Link>
        </div>
        <div className="notification-center">
          <NotificationCenter></NotificationCenter>
        </div>
      </div>
    );
  }
}


Home.contextTypes = {
  store: React.PropTypes.object,
};

// connect to Redux store
const mapStateToProps = function(state) {
  return {};
};

Home = connect(mapStateToProps)(Home);
export default Home;
