
const flatten = require("../flatten");
const expect = require("chai").expect;

describe("#flatten takes an array with array of arrays as input and returns single array.", () => {
  it("Here it returns [1, 2, 3, 4, 5, 6, 7, 8] for [1, 2, [3, 4], 5, [6, 7, 8]]", function () {
    expect(flatten([1, 2, [3, 4], 5, [6, 7, 8]])).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("Here it returns [1, 2, 3, null, 5, 6] for [1, 2, [3, null], 5, [6]] ", function () {
    expect(flatten([1, 2, [3, null], 5, [6]])).to.eql([1, 2, 3, null, 5, 6]);
  });
});
// const assertArraysEqual = function (Arr1, Arr2) {
//   if (eqArrays(Arr1, Arr2)) {
//     console.log(`✅✅✅Assertion passed: [${Arr1}] === [${Arr2}]`);
//   } else {
//     console.log(`🛑🛑🛑Assertion failed: [${Arr1}] === [${Arr2}]`);
//   }
// };
// const eqArrays = function (Arr1, Arr2) {
//   //console.log(Arr1.length + "::" + Arr2.length);
//   if (Arr1.length !== Arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < Arr1.length; i++) {
//     // console.log(Arr1[i] + "::" + Arr2[i]);
//     if (Arr1[i] !== Arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(flatten([1, 2, [3, 4], 5, [6, 7, 8]]));

// assertArraysEqual(flatten([1, 2, [3, null], 5, [6]]), [1, 2, 3, null, 5, 6]);