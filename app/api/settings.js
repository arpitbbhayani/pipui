import jsonfile from 'jsonfile';
import { CONFIG } from '../config';
import path from 'path';


function saveSettingsAPI(settings, callback) {
    let configFilePath = path.join(CONFIG.appDirectory, CONFIG.configFileName);
    jsonfile.writeFile(configFilePath, settings, {spaces: 4}, function (err) {
      callback(err.toString(), "Configuration saved successfully");
    });
}

module.exports = {
  saveSettingsAPI: saveSettingsAPI
}
