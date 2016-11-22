import { exec } from 'child_process';


function fetchPythonPackages(settings: Object, callback: Function) {
  exec('pip freeze', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    stdout = stdout.split('\n');
    var names = stdout.filter(function(token) {
      return !!token;
    }).map(function(token) {
      let tokens = token.split('==');
      return {
        'name': tokens[0],
        'version': tokens[1]
      };
    })
    console.log(names);
  });
  callback(['1', '2', '3']);
}

module.exports = {
  fetchPythonPackages: fetchPythonPackages,
}
