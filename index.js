const fs = require('fs');
const dateTime = require('node-datetime');
const jsonfile = require('jsonfile');
const run = require('./derp');

// create base output directory
const directoryPath = `./output/${dateTime.create().format('Y-m-d-H-M-S')}/`;
fs.mkdirSync(directoryPath);

const devices = jsonfile.readFileSync('./devices.json').devices;
const url = 'http://localhost:3000';

console.log(url);
console.log(directoryPath);
console.log('--------------------------------------------------------------------------------');
devices.forEach(async function(device, index) {
  await run(url, device, index).catch(console.error.bind(console));
});