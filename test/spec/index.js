'use strict';

var expect = require('chai').expect;

describe('array-copyWithin: ', function () {

  var copyWithin = require('../../');

  it('common use', function () {

    expect(copyWithin([1, 2, 3, 4, 5], 0, 3)).to.be.eql([4, 5, 3, 4, 5]);
    expect(copyWithin([1, 2, 3, 4, 5], 0, 3, 4)).to.be.eql([4, 2, 3, 4, 5]);
    expect(copyWithin([1, 2, 3, 4, 5], 0, -2, -1)).to.be.eql([4, 2, 3, 4, 5]);
    expect(copyWithin({ length: 5, 3: 1, 4: 0 }, 0, 3)).to.be.eql({
        0: 1,
        1: 0,
        3: 1,
        4: 0,
        length: 5
      }
    );
  });

  it('exceptions', function () {

    var fn1 = copyWithin.bind(null);
    var fn2 = copyWithin.bind(null, null);
    var fn3 = copyWithin.bind(null, [1, 2, 3, 4, 5], null);
    var fn4 = copyWithin.bind(null, [1, 2, 3, 4, 5], 0, null);

    expect(fn1).to.throw(Error);
    expect(fn1).to.throw(TypeError);

    expect(fn2).to.throw(Error);
    expect(fn2).to.throw(TypeError);

    expect(fn3).to.throw(Error);
    expect(fn3).to.throw(TypeError);

    expect(fn4).to.throw(Error);
    expect(fn4).to.throw(TypeError);
  });

  it('reverse: start > end', function () {
    expect(copyWithin([1, 2, 3, 4, 5], 0, 4, 3)).to.be.eql([ 4, 2, 3, 4, 5 ]);
  });
});
