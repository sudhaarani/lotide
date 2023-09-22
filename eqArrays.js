/*eslint linebreak-style: ["error", "windows"]*/
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: [${actual}] === [ ${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: [${actual}] !== [ ${expected}]`);
  }
};
const eqArrays = function (Arr1, Arr2) {
  if (Arr1.length !== Arr2.length) {
    return false
  }
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1[i] !== Arr2[i]) {
      return false;
    }
  }
  return true;
};
//console.log(eqArrays(["1", "2", "3"], []));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], []), false);

assertEqual(eqArrays(["1", null, "3"], ["1", "2", "3"]), false);
assertEqual(eqArrays([undefined, "2", "3"], ["1", "2", "3"]), false);

