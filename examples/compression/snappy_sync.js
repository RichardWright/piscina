// eslint-disable no-unused-vars
'use strict';

//const crypto = require('crypto');
//const { promisify } = require('util');
//const scrypt = promisify(crypto.scrypt);
//const randomFill = promisify(crypto.randomFill);

//const salt = Buffer.allocUnsafe(16);

/*
const { performance, PerformanceObserver } = require('perf_hooks');
const obs = new PerformanceObserver((entries) => {
  console.log(entries.getEntries()[0].duration);
});
obs.observe({ entryTypes: ['measure'] });
*/

const { compressSync } = require('snappy');

const testJson = require('./example.json');

module.exports = function () {
  //performance.mark('startSync');

  const test = {
    id: Math.random(),
    ...testJson
  }
  compressSync(JSON.stringify(test));

  //performance.mark('endSync');
  //performance.measure('start to end', 'startSync', 'endSync');
  return true;
};
