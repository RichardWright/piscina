// eslint-disable no-unused-vars
'use strict';
//const { performance, PerformanceObserver } = require('perf_hooks');
const { compress } = require('snappy');

/*
const obs = new PerformanceObserver((entries) => {
  console.log(entries.getEntries()[0].duration);
});
obs.observe({ entryTypes: ['measure'] });
*/

const testJson = require('./example.json');

module.exports = async function () {
  //performance.mark('startAsync');


  const test = {
    id: Math.random(),
    ...testJson
  }

  //console.log(`test ${test.id}`);

  await compress(JSON.stringify(test));

  //performance.mark('endAsync');
  //performance.measure('start to end', 'startAsync', 'endAsync');
  return true;
};
