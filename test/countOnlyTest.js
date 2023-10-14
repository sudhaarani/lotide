//assertArraysEqual can compare complex data types like arrays.
const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly return an object containing counts of everything that the input object listed.", function () {
  it("returns { 'Fang': 2, 'Jason': 1 } for counting Number of ocurrances of these names { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false } in given firstname array", function () {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {
          "Fang": 2, "Jason": 1 });
  });
});

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion passed: [${actual}] === [ ${expected}]`);
//   } else {
//     console.log(`Assertion failed: [${actual}] !== [ ${expected}]`);
//   }
// };

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(result1);
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);