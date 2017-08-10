var fs = require('fs');
var testFolder = "./node_modules";

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log('npm uninstall '+file);
  });
})