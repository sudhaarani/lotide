//Given an array with other arrays inside, it can flatten it into a single-level array.
/*eslint linebreak-style: ["error", "windows"]*/
const assertArraysEqual = function (Arr1, Arr2) {
  if (eqArrays(Arr1, Arr2)) {
    console.log(`✅✅✅Assertion passed: [${Arr1}] === [${Arr2}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: [${Arr1}] === [${Arr2}]`);
  }
};
const eqArrays = function (Arr1, Arr2) {
  //console.log(Arr1.length + "::" + Arr2.length);
  if (Arr1.length !== Arr2.length) {
    return false;
  }
  for (let i = 0; i < Arr1.length; i++) {
    // console.log(Arr1[i] + "::" + Arr2[i]);
    if (Arr1[i] !== Arr2[i]) {
      return false;
    }
  }
  return true;
};
const flatten = function (Arr1) {
  let newArr = [];
  for (let i = 0; i < Arr1.length; i++) {
    if (Array.isArray(Arr1[i])) { // array element is an array or not
      for (let j = 0; j < Arr1[i].length; j++) {
        newArr.push(Arr1[i][j]); // pushing each array of array elements
      }
    }
    if (!Array.isArray(Arr1[i])) {
      newArr.push(Arr1[i]);
    }
  }
  return newArr;
};
console.log(flatten([1, 2, [3, 4], 5, [6, 7, 8]]));

assertArraysEqual(flatten([1, 2, [3, null], 5, [6]]), [1, 2, 3, null, 5, 6]);