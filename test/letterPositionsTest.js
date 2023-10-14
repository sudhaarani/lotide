//assertArraysEqual can compare complex data types like arrays.
const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions returns position(index) of each letter in the given string", function () {
  it("Here it returns {h:[0],e:[1],l:[2,3],o:[4]} for 'hello'", function () {
    assert.deepEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] });
  });
  it("Here it returns {v: [0,6], a: [1], n: [2], c: [3], o: [4], u: [5], e: [7], r: [8]} for 'vancouver'", function () {
    assert.deepEqual(letterPositions("vancouver"), { v: [0, 6], a: [1], n: [2], c: [3], o: [4], u: [5], e: [7], r: [8] });
  });
});

// console.log(letterPositions("helloworld"));
// const output = letterPositions("helloworld");
// assertArraysEqual(output["l"], [2, 3, 8]); // checking with variable which has retruned values of letterPositions
// // see these 2 difference
// assertArraysEqual(letterPositions("hello").e, [1]);// calling function