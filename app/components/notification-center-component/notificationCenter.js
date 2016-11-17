// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Notification from '../notification-component/Notification';
import { addNotificationAction, removeNotificationAction } from '../../actions/notificationCenter';


class NotificationCenter extends Component {

  constructor() {
    super();
    const self = this;

    self.addNotificationMessage = self.addNotificationMessage.bind(self);
    self.removeNotificationMessage = self.removeNotificationMessage.bind(self);
  }

  addNotificationMessage() {
    const self = this;
    self.context.store.dispatch(addNotificationAction({
      message: "message " + Date(),
      id: Date.now()
    }));
  }

  removeNotificationMessage(messageId) {
    const self = this;
    self.context.store.dispatch(removeNotificationAction(messageId));
  }

  render() {
    const self = this;
    var notifications = self.context.store.getState().notificationCenter;

    return (
      <div>
        <button onClick={self.addNotificationMessage}>Add sample</button>
        {
          notifications.map((notification, i) => {
            return (
              <Notification
                key={notification.id} message={notification.message} id={notification.id}
                removeNotification={self.removeNotificationMessage.bind(null, notification.id)}>
              </Notification>
            );
          })
        }
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
