import jsonfile from 'jsonfile';
import { CONFIG } from '../config';
import path from 'path';


const configBoilerplate = {
  requirementsFile: null,
  venvPath: null
};

function saveSettingsAPI(settings, callback) {
  let configFilePath = path.join(CONFIG.appDirectory, CONFIG.configFileName);
  jsonfile.writeFile(configFilePath, settings, {spaces: 4}, function (err) {
    let errStr = err ? err.toString() : null;
    callback(errStr, "Configuration saved successfully");
  });
}

function readSettingsAPI(callback) {
  let configFilePath = path.join(CONFIG.appDirectory, CONFIG.configFileName);
  jsonfile.readFile(configFilePath, function(err, obj) {
    let errStr = err ? err.toString() : null;
    callback(errStr, obj);
  });
}

module.exports = {
  saveSettingsAPI: saveSettingsAPI,
  configBoilerplate: configBoilerplate
}
