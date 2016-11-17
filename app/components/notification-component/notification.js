import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class Notification extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired
  };

  render() {
    const self = this;
    return (
      <div>
        <div id={this.props.id} className="ui label" onClick={this.props.removeNotification}>
          {this.props.message}
        </div>
      </div>
    );
  }
}
