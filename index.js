'use strict';

var isArrayLike = require('is-array-like');

function fix(index, length) {
  return index < 0
    ? Math.max(length + index, 0)
    : Math.min(length, index);
}

function checkIndex(index, arg) {
  if (isNaN(index) || !isFinite(index)) {
    throw new TypeError('Invalid argument: \'' + arg + '\' is not a number');
  }
}

module.exports = function (array, target, start, end) {

  if (!isArrayLike(array)) {
    throw new TypeError('Invalid argument: \'array\' is not an array or array like object');
  }

  target = parseInt(target, 10);
  start  = parseInt(start, 10);

  checkIndex(target, 'target');
  checkIndex(start, 'start');


  var object = Object(array);
  var length = parseInt(object.length, 10);

  if (end == null) {
    end = length;
  } else {
    end = parseInt(end, 10);
    checkIndex(end, 'end');
  }

  target = fix(target, length);
  start  = fix(start, length);
  end    = fix(end, length);


  var reverse = start > end;
  var count   = (reverse ? start - end : end - start);

  while (count > 0) {

    count--;

    var from = !reverse ? start + count : end - count;
    var to   = !reverse ? target + count : target - count;

    if (from in object) {
      object[to] = object[from];
    } else {
      delete[to];
    }
  }


  return object;
};
