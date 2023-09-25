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

//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
const middle = function (Arr1) {
  let newArr = [];
  if (Arr1.length > 2 && Arr1.length % 2 === 0) { //length is even
    let midindex = Arr1.length / 2;
    newArr.push(Arr1[midindex - 1]);
    newArr.push(Arr1[midindex]);
  }
  if (Arr1.length > 2 && Arr1.length % 2 === 1) { //length is odd
    let midindex = Math.floor(Arr1.length / 2); //dividing the length ,gives float value 
    newArr.push(Arr1[midindex]);
  }
  return newArr;
};
console.log(middle([1])); // no middle element so returns empty array
console.log(middle([1, 2])); //no middle element so returns empty array
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(middle([1, 2, 3, null, 5, 6, 7, 8, 9, 10]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);