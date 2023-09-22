/*eslint linebreak-style: ["error", "windows"]*/
const assertArraysEqual = function (Arr1, Arr2) {
  if (eqArrays(Arr1, Arr2)) {
    console.log(`✅✅✅Assertion passed: [${Arr1}] === [${Arr2}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: [${Arr1}] === [${Arr2}]`);
  }
};
const eqArrays = function (Arr1, Arr2) {
  if (Arr1.length !== Arr2.length) {
    return false;
  }
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1[i] !== Arr2[i]) {
      return false;
    }
  }
  return true;
};
//console.log(eqArrays(["1", "2", "3"], []));

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], []);

assertArraysEqual(["1", null, "3"], ["1", "2", "3"]);
assertArraysEqual([undefined, "2", "3"], ["1", "2", "3"]);
