# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.3.1](https://github.com/piscinajs/piscina/compare/v4.3.0...v4.3.1) (2024-01-30)


### Bug Fixes

* **#491:** out of bounds histogram value ([#496](https://github.com/piscinajs/piscina/issues/496)) ([0b4eada](https://github.com/piscinajs/piscina/commit/0b4eada2485a0f722f5b6d39d657fd51975df0f3)), closes [#491](https://github.com/piscinajs/piscina/issues/491)

## [4.3.0](https://github.com/piscinajs/piscina/compare/v4.2.1...v4.3.0) (2024-01-16)


### Features

* use native Node.js histogram support ([#482](https://github.com/piscinajs/piscina/issues/482)) ([aa5b140](https://github.com/piscinajs/piscina/commit/aa5b1408e33420e7c29725381d7824b0b40d26e8))

### [4.2.1](https://github.com/piscinajs/piscina/compare/v4.2.0...v4.2.1) (2023-12-13)


### Bug Fixes

* default minThreads with odd CPU count ([#457](https://github.com/piscinajs/piscina/issues/457)) ([f4edf87](https://github.com/piscinajs/piscina/commit/f4edf87c8c4883e06ab70e99a8a5050eded89c5d))

## [4.2.0](https://github.com/piscinajs/piscina/compare/v4.1.0...v4.2.0) (2023-11-19)


### Features

* Add `Piscina#close` API ([#396](https://github.com/piscinajs/piscina/issues/396)) ([5378e4c](https://github.com/piscinajs/piscina/commit/5378e4cf9143587d9457d3cef6b88aa9653749bd))


### Bug Fixes

* add signal reason support ([#403](https://github.com/piscinajs/piscina/issues/403)) ([66809f9](https://github.com/piscinajs/piscina/commit/66809f94868b4b4597401e10252e1285fabc63c2))
* do not re-create threads when calling `.destory()` ([#430](https://github.com/piscinajs/piscina/issues/430)) ([ec21ff2](https://github.com/piscinajs/piscina/commit/ec21ff28f90a4d5e001ba694fe3dcd6abec3f553))
* migrate to EventEmitterAsyncResource from core ([#433](https://github.com/piscinajs/piscina/issues/433)) ([0a539e2](https://github.com/piscinajs/piscina/commit/0a539e23e7c413cc33631f1adb32ab28b468297b))
