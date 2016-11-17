import jsonfile from 'jsonfile';
import { CONFIG } from '../config';
import path from 'path';

export const SAVE_SETTINGS = 'SAVE_SETTINGS';

function saveSettingsAction(settings) {
  return {
    type: SAVE_SETTINGS,
    settings: settings
  };
}

export function saveSettings(settings) {
  return (dispatch: Function, getState: Function) => {
    let configFilePath = path.join(CONFIG.appDirectory, CONFIG.configFileName);
    jsonfile.writeFile(configFilePath, settings, {spaces: 4}, function (err) {
      if(err) {
        console.error(err);
        return;
      }
      dispatch(saveSettingsAction(settings));
    })
  };
}
