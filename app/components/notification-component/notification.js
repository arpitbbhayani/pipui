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
        <div className="ui label">
          {this.props.message}
        </div>
      </div>
    );
  }
}
