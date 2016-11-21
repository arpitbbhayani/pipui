// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Notification from '../notification-component/Notification';
import { removeNotificationAction } from '../../actions/notificationCenter';


class NotificationCenter extends Component {

  constructor() {
    super();
    const self = this;
    self.removeNotificationMessage = self.removeNotificationMessage.bind(self);
  }

  componentWillMount() {
    const self = this;
    self.theStore = self.context.store;
  }

  removeNotificationMessage(messageId) {
    const self = this;
    self.theStore.dispatch(removeNotificationAction(messageId));
  }

  render() {
    const self = this;
    var notifications = self.theStore.getState().notificationCenter;

    const notificationCenterStyle = {
      'position': 'fixed',
      'bottom': 0,
      'right': 0,
      'zIndex': 100,
      'width': 250,
    };

    return (
      <div style={notificationCenterStyle} className="ui relaxed list">
        {
          notifications.map((notification, i) => {
            return (
              <Notification
                key={notification.id}
                message={notification.message}
                id={notification.id}
                type={notification.type}
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
