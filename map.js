/*eslint linebreak-style: ["error", "windows"]*/
//assertArraysEqual can compare complex data types like arrays.
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

const map = function (array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item)); // callback(item) returns first letter of each word and length of each element
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const result = map(words, element => element[0]);
console.log(result);

assertArraysEqual(map(words, element => element.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, element => element + " appended"), ["ground appended", "control appended", "to appended", "major appended", "tom appended"]);

