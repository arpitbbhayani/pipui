import fs from 'fs';

import { CONFIG } from '../config';
import { saveSettingsAPI, configBoilerplate } from './settings';


function createAppFolder() {
  let appFolder = CONFIG.appDirectory;
  fs.mkdir(appFolder, function(err, resp) {
    if(err) {
      return;
    }
    saveSettingsAPI(configBoilerplate, ()=>{});
  });
}

module.exports = {
  createAppFolder: createAppFolder
}
