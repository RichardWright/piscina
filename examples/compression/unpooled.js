'use strict';

//const crypto = require('crypto');
//const { promisify } = require('util');
//const randomFill = promisify(crypto.randomFill);
//const scrypt = promisify(crypto.scrypt);
const { performance, PerformanceObserver } = require('perf_hooks');
//const testJson = require('./example.json');
const { compress } = require('snappy');
const testJson = require('./example.json');

//const salt = Buffer.allocUnsafe(16);

const obs = new PerformanceObserver((entries) => {
  console.log(entries.getEntries()[0].duration);
});
obs.observe({ entryTypes: ['measure'] });


(async function () {
  performance.mark('start');

  for (let index = 0; index < 10000; index++) {
    const test = {
      id: Math.random(),
      ...testJson
    }
    await compress(JSON.stringify(test));
  }

  performance.mark('end');
  performance.measure('start to end', 'start', 'end');
})();
