# fast-path-set

A fast drop-in replacement for [`lodash.set`](https://www.npmjs.com/package/lodash.set).

## Install 

```
$ npm i fast-path-set --save
```

## Usage

```js
const set = require('fast-path-set')
const obj = {}
set(obj, 'a.b.c', 1)
console.log(obj.a.b.c)
```

Check [`test.js`](https://github.com/galvez/fast-path-set/blob/main/test.js) for more detailed usage examples. There is one **key** difference to `lodash.set`, which is the fact `fast-path-set` will **prioritise safety** and abort attempts to overwrite non-object values. It also correctly prevents prototype pollution attacks.

## Benchmark

```
$ npm i lodash.set
$ node bench.js lodash.set
85422.0864751339
$ npm i dset
$ node bench.js dset
65307.5742549896
$ node bench.js fast-path-set
63214.1385409832
```

## Acknowledgements

Thanks to
[Luke Edwards](https://github.com/lukeed),
[James M Snell](https://github.com/jasnell) and
[Simone Sanfratello](https://github.com/simone-sanfratello)
for helping polishing this to perfection.

## License

MIT
