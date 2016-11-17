// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Notification from '../notification-component/Notification';
import { addNotificationAction } from '../../actions/notificationCenter';


class NotificationCenter extends Component {

  constructor() {
    super();
    const self = this;

    self.addNotificationMessage = self.addNotificationMessage.bind(self);
  }

  addNotificationMessage() {
    const self = this;
    self.context.store.dispatch(addNotificationAction("Message"));
    console.log(self.context.store.getState());
  }

  render() {
    const self = this;

    var notifications = self.context.store.getState().notificationCenter;
    console.log("Notification:-", notifications);


    return (
      <div>
        {
          notifications.map((notification, i) => {
            return (
              <Notification
                key={i} message={notification}>
              </Notification>
            );
          })
        }
        <button onClick={self.addNotificationMessage}>Add sample</button>
      </div>
    );
  }
}

NotificationCenter.contextTypes = {
  store: React.PropTypes.object,
};

// connect to Redux store
const mapStateToProps = function(state) {
  return {
    notificationCenter: state.notificationCenter
  };
};

NotificationCenter = connect(mapStateToProps)(NotificationCenter);
export default NotificationCenter;
