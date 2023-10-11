/*eslint linebreak-style: ["error", "windows"]*/

const eqArrays = require("./eqArrays");

//assertArraysEqual can compare complex data types like arrays.
const assertArraysEqual = function (Arr1, Arr2) {
  if (eqArrays(Arr1, Arr2)) {
    console.log(`✅✅✅Assertion passed: [${Arr1}] === [${Arr2}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: [${Arr1}] === [${Arr2}]`);
  }
};

//console.log(eqArrays(["1", "2", "3"], []));

module.exports = assertArraysEqual;