'use strict';

const Piscina = require('../..');
const { resolve } = require('path');
//const crypto = require('crypto');
//const { promisify } = require('util');
//const randomFill = promisify(crypto.randomFill);
const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((entries) => {
  console.log(entries.getEntries()[0].duration);
});
obs.observe({ entryTypes: ['measure'] });

const piscina = new Piscina({
  filename: resolve(__dirname, 'snappy.js'),
  concurrentTasksPerWorker: 1
});

process.on('exit', () => {
  const { runTime, waitTime } = piscina;
  console.log('Run Time Average:', runTime.average);
  console.log('Run Time Mean/Stddev:', runTime.mean, runTime.stddev);
  console.log('Run Time Min:', runTime.min);
  console.log('Run Time Max:', runTime.max);
  console.log('Wait Time Average:', waitTime.average);
  console.log('Wait Time Mean/Stddev:', waitTime.mean, waitTime.stddev);
  console.log('Wait Time Min:', waitTime.min);
  console.log('Wait Time Max:', waitTime.max);
});

(async function () {
  performance.mark('start');

  for (let index = 0; index < 10000; index++) {
    try {
      await piscina.run();
    } catch (error) {
      console.error('run failed', error)
    }
  }

  performance.mark('end');
  performance.measure('start to end', 'start', 'end');
})();
