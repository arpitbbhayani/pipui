// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

import { saveSettingsAction } from '../../actions/settings';
import { saveSettingsAPI } from '../../api/settings';
import { addNotificationAction } from '../../actions/notificationCenter';


class Settings extends Component {

  saveSettings(e, serializedForm) {
    e.preventDefault();

    let localSettings = {
      requirementsFile: serializedForm.requirementsFile,
      venvPath: serializedForm.venvPath
    };

    const self = this;
    saveSettingsAPI(localSettings, function(err, resp) {
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
      self.context.store.dispatch(saveSettingsAction(localSettings));
    });
  }

  constructor(props) {
    super(props);
    const self = this;
    self.saveSettings = self.saveSettings.bind(self);
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
            <input type="text" name="venvPath" placeholder="Virtual environment path"></input>
          </Form.Field>
          <Form.Field>
            <label>Requirements File Path</label>
            <input type="text" name="requirementsFile" placeholder="Requirements File path"></input>
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
    requirementsFile: state.requirementsFile,
    venvPath: state.venvPath
  };
};

Settings = connect(mapStateToProps)(Settings);
export default Settings;
