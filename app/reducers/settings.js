import { SAVE_SETTINGS } from '../actions/settings';

export default function settings(state: Object = {
                                    venvPath: '',
                                    requirementsFile: ''
                                }, action: Object) {

  switch (action.type) {
    case SAVE_SETTINGS:
      return {
        ...state,
        ...action.settings
      };
    default:
      return state;
  }
}
