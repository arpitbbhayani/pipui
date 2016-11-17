import React, { Component, PropTypes } from 'react';
import NotificationCenter from '../notification-center-component/notificationCenter';


export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
        <div className="notification-center">
          <NotificationCenter></NotificationCenter>
        </div>
      </div>
    );
  }
}
