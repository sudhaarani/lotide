const assertObjectsEqual = require("../assertObjectsEqual");
const assert = require("chai").assert;

describe("#assertObjectsEqual", function () {
  it(`returns true for comparing two objects { a: ['1', 2], b: 2 }, { b: 2, a: ['1', 2] }`, function () {
    assert.isTrue(assertObjectsEqual({ a: ['1', 2], b: 2 }, { b: 2, a: ['1', 2] }));
  });
});

//assertObjectsEqual({ a: ['1', 2], b: 2 }, { b: 2, a: ['1', 2] });