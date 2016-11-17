// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { saveSettingsAction } from '../../actions/settings';
import { saveSettingsAPI } from '../../api/settings';
import { addNotificationAction } from '../../actions/notificationCenter';


class Settings extends Component {

  changeVenvPath(e) {
    const self = this;
    self.localCache = {
      ...self.localCache,
      venvPath: e.target.value
    }
  };

  changeRequirementsFile(e) {
    const self = this;
    self.localCache = {
      ...self.localCache,
      requirementsFile: e.target.value
    }
  };

  saveSettings() {
    const self = this;
    saveSettingsAPI(self.localCache, function(err, resp) {
      if(err) {
        self.context.store.dispatch(addNotificationAction({
          message: err,
          id: Date.now()
        }));
        return;
      }

      self.context.store.dispatch(addNotificationAction({
        message: resp,
        id: Date.now()
      }));
      self.context.store.dispatch(saveSettingsAction(self.localCache));
    });
  }

  constructor(props) {
    super(props);
    const self = this;

    self.localCache = {
      venvPath: null,
      requirementsFile: null
    }

    self.saveSettings = self.saveSettings.bind(self);
    self.changeRequirementsFile = self.changeRequirementsFile.bind(self);
    self.changeVenvPath = self.changeVenvPath.bind(self);
  }

  render() {
    const self = this;
    return (
      <div>
        <Link to="/">Home</Link>
        <div className="ui header">
          Settings Page
        </div>
        <div className="ui form">
          <div className="ui field">
            <label>Virtual Environment Path</label>
            <input type="text" placeholder="Virtual environment path" onChange={self.changeVenvPath}></input>
          </div>
          <div className="ui field">
            <label>Requirements File Path</label>
            <input type="text" name="requirements_file" onChange={self.changeRequirementsFile}></input>
          </div>
          <div className="ui field">
            <button className="ui button" onClick={self.saveSettings}>Save Settings</button>
          </div>
        </div>
      </div>
    );
  }
}

Settings.contextTypes = {
  store: React.PropTypes.object,
};

// connect to Redux store
const mapStateToProps = function(state) {
  return {
    requirementsFile: state.requirementsFile,
    venvPath: state.venvPath
  };
};

Settings = connect(mapStateToProps)(Settings);
export default Settings;
