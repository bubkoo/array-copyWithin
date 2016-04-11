# array-copyWithin

> Polyfill for Array.prototype.copyWithin.



[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/array-copyWithin/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/array-copyWithin/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/array-copyWithin)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/array-copyWithin/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/array-copyWithin)

The `copyWithin()` method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array.


## Install

```
$ npm install --save copyWithin
```

## Usage

```js
var copyWithin = require('array-copyWithin');

copyWithin([1, 2, 3, 4, 5], 0, 3);
// => [4, 5, 3, 4, 5]

copyWithin([1, 2, 3, 4, 5], 0, 3, 4);
// => [4, 2, 3, 4, 5]

copyWithin([1, 2, 3, 4, 5], 0, -2, -1);
// => [4, 2, 3, 4, 5]

copyWithin({ length: 5, 3: 1, 4: 0 }, 0, 3);
// => {0: 1, 1: 0, 3: 1, 4: 0, length: 5 }
```

## API

### copyWithin(array, start[, end = array.length])

`target` - Target start index position where to copy the elements to.

`start` - Source start index position where to start copying elements from.

`end` - Optional. Source end index position where to end copying elements from.

The arguments `target`, `start`, and `end` are coerced to [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and truncated to integer values.

If `start` is negative, it is treated as `length + start` where `length` is the length of the array. If `end` is negative, it is treated as `length + end`.

The `copyWithin` function is intentionally *generic*, it does not require that its this value be an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) object and in addition, copyWithin is a *mutable method*, it will change this object itself, and return it, not just return a copy of it.


## Contributing
 
Pull requests and stars are always welcome. 

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/array-copyWithin/issues).
   
But before doing anything, please read the [CONTRIBUTING](https://github.com/tunnckocore/starts-with/blob/master/CONTRIBUTING.md) guidelines.
