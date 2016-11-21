import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


export default class Notification extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    removeNotification: PropTypes.func.isRequired
  };

  render() {
    const self = this;
    const notificationMessageStyle = classNames({
      'ui fluid small message floating': true,
      'positive': self.props.type == 1,
      'negative': self.props.type == -1,
      'info': self.props.type == 0,
    });
    return (
      <div className="ui item">
        <div id={this.props.id} className={notificationMessageStyle} onClick={this.props.removeNotification}>
          <i className="close icon"></i>
          {this.props.message}
        </div>
      </div>
    );
  }
}
