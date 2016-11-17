import { CONFIG } from '../config';
import fs from 'fs';


function createAppFolder() {
  let appFolder = CONFIG.appDirectory;
  fs.mkdir(appFolder, function(err) {
    // silently discard error
  });
}

module.exports = {
  createAppFolder: createAppFolder
}
