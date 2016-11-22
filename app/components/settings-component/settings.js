// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Button, Form, Checkbox } from 'semantic-ui-react';

import { saveSettingsAction } from '../../actions/settings';
import { saveSettingsAPI, readSettingsAPI } from '../../api/settings';
import { addNotificationAction } from '../../actions/notificationCenter';


class Settings extends Component {

  readSettings() {
    const self = this;
    readSettingsAPI(function(err, obj) {
      if(err) {
        console.log(err);
        return;
      }
      self.setState(obj);
      self.theStore.dispatch(saveSettingsAction(obj));
    });
  }

  saveSettings(e) {
    e.preventDefault();
    const self = this;
    saveSettingsAPI(self.state, function(err, resp) {
      if(err) {
        self.theStore.dispatch(addNotificationAction({
          message: err,
          id: Date.now(),
          type: -1,
        }));
        return;
      }

      self.theStore.dispatch(addNotificationAction({
        message: resp,
        id: Date.now(),
        type: 1,
      }));
      self.theStore.dispatch(saveSettingsAction(self.state));
    });
  }

  updateRequirementsFile(e) {
    const self = this;
    self.setState({
      requirementsFile: e.target.value
    });
  }

  updateVenvPath(e) {
    const self = this;
    self.setState({
      venvPath: e.target.value,
    });
  }

  updateUseLocal(e, details) {
    e.preventDefault();
    const self = this;
    const {name, value, checked} = details;

    self.setState({
      useLocalVenv: checked
    })
  }

  constructor(props) {
    super(props);
    const self = this;
    self.state = {
      venvPath: '',
      requirementsFile: '',
      useLocalVenv: false
    };
    self.saveSettings = self.saveSettings.bind(self);
    self.readSettings = self.readSettings.bind(self);
    self.updateVenvPath = self.updateVenvPath.bind(self);
    self.updateRequirementsFile = self.updateRequirementsFile.bind(self);
    self.updateUseLocal = self.updateUseLocal.bind(self);
  }

  componentWillMount() {
    const self = this;
    self.theStore = self.context.store;

    self.readSettings();
  }

  componentDidMount() {
    const self = this;
    self.setState({
      venvPath: self.props.venvPath,
      requirementsFile: self.props.requirementsFile,
      useLocalVenv: self.props.useLocalVenv,
    });
  }

  render() {
    const self = this;

    return (
      <div>
        <Link to="/">Home</Link>
        <div className="ui header">
          Settings Page
        </div>

        <Checkbox
          label='Use a local virtual environment'
          name='useLocalVenv'
          checked={self.state.useLocalVenv}
          onChange={self.updateUseLocal}/>

        {self.state.useLocalVenv ?
          <Form>
            <Form.Field>
              <label>Virtual Environment Path</label>
              <input
                type="text"
                name="venvPath"
                placeholder="Virtual environment path"
                value={self.state.venvPath}
                onChange={self.updateVenvPath}
              />
            </Form.Field>
            <Form.Field>
              <label>Requirements File Path</label>
              <input
                type="text"
                name="requirementsFile"
                placeholder="Requirements file path"
                value={self.state.requirementsFile}
                onChange={self.updateRequirementsFile}
              />
            </Form.Field>
          </Form>
          :
          <div></div>
        }

        <button
          onClick={self.saveSettings}>Save Settings</button>
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
    venvPath: state.settings.venvPath,
    requirementsFile: state.settings.requirementsFile,
    useLocalVenv: state.settings.useLocalVenv,
  };
};

Settings = connect(mapStateToProps)(Settings);
export default Settings;
