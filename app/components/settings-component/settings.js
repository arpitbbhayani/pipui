// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

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

  saveSettings(e, serializedForm) {
    e.preventDefault();
    const self = this;
    saveSettingsAPI(self.state, function(err, resp) {
      if(err) {
        self.theStore.dispatch(addNotificationAction({
          message: err,
          id: Date.now()
        }));
        return;
      }

      self.theStore.dispatch(addNotificationAction({
        message: resp,
        id: Date.now()
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

  constructor(props) {
    super(props);
    const self = this;
    self.state = {
      venvPath: '',
      requirementsFile: '',
    };
    self.saveSettings = self.saveSettings.bind(self);
    self.readSettings = self.readSettings.bind(self);
    self.updateVenvPath = self.updateVenvPath.bind(self);
    self.updateRequirementsFile = self.updateRequirementsFile.bind(self);
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

        <Form onSubmit={self.saveSettings}>
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
          <Button primary type='submit'>Submit</Button>
        </Form>
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
  };
};

Settings = connect(mapStateToProps)(Settings);
export default Settings;
