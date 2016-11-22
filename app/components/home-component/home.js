// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import PackagesContainer from '../packages-container-component/packagesContainer';


class Home extends Component {
  constructor() {
    super();
  }

  render() {
    const self = this;
    return (
      <div>
        <div>
          <h2>Home</h2>
          <Link to="/settings">Settings</Link>
        </div>
        <PackagesContainer
          settings={self.props.settings}
        />
      </div>
    );
  }
}


Home.contextTypes = {
  store: React.PropTypes.object,
};

// connect to Redux store
const mapStateToProps = function(state) {
  return {
    settings: state.settings
  };
};

Home = connect(mapStateToProps)(Home);
export default Home;
