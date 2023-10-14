const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters should return count of each letter in the given string/sentence as object.", function () {
  it("Here it returns { h: 1, e: 1, l: 2, o: 1 } for 'hello'", function () {
    assert.deepEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1 });   //deepEqual for array and object comparison
  });
  it("Here it returns { h: 1, a: 3, p: 2, y: 2, k: 2, i: 1, n: 1, g: 1 } for 'happy kayaking'", function () {
    assert.deepEqual(countLetters("happy kayaking"), { h: 1, a: 3, p: 2, y: 2, k: 2, i: 1, n: 1, g: 1 });
  });
});

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion passed: [${actual}] === [ ${expected}]`);
//   } else {
//     console.log(`Assertion failed: [${actual}] !== [ ${expected}]`);
//   }
// };

// console.log(countLetters("happy kayaking"));
// const output = countLetters("happy kayaking");

// assertEqual(output["p"], 2);
// assertEqual(countLetters("happy kayaking").h, 1); // can be checked in both cases

// assertEqual(output["k"], 2);

// assertEqual(output["h"], 1);