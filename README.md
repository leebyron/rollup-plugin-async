Rollup Async functions plugin
=============================

[![Build Status](https://travis-ci.org/leebyron/rollup-plugin-async.svg?branch=master)](https://travis-ci.org/leebyron/rollup-plugin-async)

This [Rollup](http://rollupjs.org/) plugin will replace [async functions](https://tc39.github.io/ecmascript-asyncawait/) with generator functions that can run in
modern browsers or in most versions of node.js during bundling using [`async-to-gen`](https://github.com/leebyron/async-to-gen).

## Install

```
npm install --save rollup-plugin-async
```

```js
var rollup = require('rollup').rollup;
var async = require('rollup-plugin-async');

rollup({
  entry: 'main.js',
  plugins: [ async() ]
}).then(...);
```
