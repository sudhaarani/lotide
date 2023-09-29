/*eslint linebreak-style: ["error", "windows"]*/
//assertArraysEqual can compare complex data types like arrays.

//We'll implement a new function letterPositions which will return all the indices (zero-based positions) 
//in the string where each character is found.
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
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  let i = 0;
  for (ele of sentence) {
    if (ele in results) {//checking key-value if available or not in results object
      results[ele].push(i); // if key available ,pushing that index in existing key
    } else {
      results[ele] = [i]; // creating key with (index as)value if not available in results object
    }
    i++; // incrementing index 
  }
  delete results[" "];// skips the space while returning if space is present, but space position is counted
  return results;
};

console.log(letterPositions("helloworld"));
const output = letterPositions("helloworld");
assertArraysEqual(output["l"], [2, 3, 8]); // checking with variable which has retruned values of letterPositions
// see these 2 difference
assertArraysEqual(letterPositions("hello").e, [1]);// calling function

