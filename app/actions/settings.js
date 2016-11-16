// @flow
export const SAVE_SETTINGS = 'SAVE_SETTINGS';

function saveSettingsAction(settings) {
  return {
    type: SAVE_SETTINGS,
    settings: settings
  };
}

export function saveSettings(settings) {
  return (dispatch: Function, getState: Function) => {
    dispatch(saveSettingsAction(settings));
  };
}
