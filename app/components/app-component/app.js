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
        <div>
          <NotificationCenter></NotificationCenter>
        </div>
      </div>
    );
  }
}
