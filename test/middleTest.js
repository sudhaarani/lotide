const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", function () {
  it(" returns [2,3] for [1,2,3,4]", function () {
    assert.deepEqual(middle([1, 2, 3,4]), [2,3]);
  });
  it(" returns [] for ['5']", function () {
    assert.deepEqual(middle(["5"]), []);
  });
  it(" returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs'] ", function () {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ['Lighthouse']);
  });
  it(" returns [5] for [1, 2, 3, 4, 5, 6, 7, 8, 9] ", function () {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
  });
});

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);