#!/usr/bin/env node

var jsonfile = require('jsonfile');
var configFile = 'config.json';
var configData;

// Get config data
try {
  configData = jsonfile.readFileSync(configFile);
} catch(e) {
  console.log('Error: ' + configFile + ' was not found');
  return;
}
if (!configData.quickbuildDomain) {
  console.log('Error: QuickBuild domain is not specified in ' + configFile);
  return;
}

// Write timestamp to config file
configData.lastSync = (new Date()).toJSON();
jsonfile.writeFileSync(configFile, configData);
