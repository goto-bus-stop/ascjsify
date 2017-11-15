# ascjsify

fast browserify transform for ES modules, and nothing else--using [@WebReflection](https://github.com/webreflection) [`ascjs`](https://github.com/webreflection/ascjs)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/ascjsify.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ascjsify
[travis-image]: https://img.shields.io/travis/goto-bus-stop/ascjsify.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/ascjsify
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install ascjsify
```

## Usage

```bash
browserify app.js -t ascjsify
browserify app.js -g ascjsify # global
```

```js
var ascjsify = require('ascjsify')
var b = browserify()
b.transform(ascjsify, { global: true })
```

`global: true` is optional, but useful if dependencies may be using ES modules already.
`ascjsify` only runs on files that look like they may contain `import` or `export` statements, so it won't slow everything down when run globally.

### Input

```js
import { EventEmitter } from 'events'
export default new EventEmitter()
```

### Output

```js
const { EventEmitter } = require('events')
Object.defineProperty(exports, '__esModule', {value: true}).default = new EventEmitter()
```

## License

[Apache-2.0](LICENSE.md)
