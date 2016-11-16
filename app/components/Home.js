// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Home</h2>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    );
  }
}
