// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from '../components/Settings';
import * as SettingsActions from '../actions/settings';

function mapStateToProps(state) {
  return {
    requirementsFile: state.requirementsFile,
    venvPath: state.venvPath
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
