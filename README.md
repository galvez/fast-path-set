# fast-path-set

A fast drop-in replacement for [`lodash.set`](https://www.npmjs.com/package/lodash.set).

## Install 

```
$ npm i fast-path-set --save
```

## Benchmark

```
$ npm i lodash.set
$ node bench.js lodash.set
89006.61856603622
$ node bench.js fast-path-set
28743.362992048264
```
