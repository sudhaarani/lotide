/*eslint linebreak-style: ["error", "windows"]*/
const eqArrays = function (Arr1, Arr2) { //to compare array values
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
const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  // console.log(key1 + "::" + key2);
  if (key1.length !== key2.length) { //comparing key length
    return false;
  }
  for (let key of key1) { //looping through one of the keys as length is equal
    if (object1[key] !== object2[key]) { //2 object-values are not equal, if object-values are array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {// checking if object-values are array
        if (eqArrays(object1[key], object2[key])) {//if it is array, calling eqArrays func to check both array values are equal
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require("util").inspect;//to import util library's inspect function by using require function
  // require() is a built-in function to include external modules that exist in separate files
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅Assertion passed: [${inspect(obj1)}] === [${inspect(obj2)}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: [${inspect(obj1)}] === [${inspect(obj2)}]`);
  }
};

assertObjectsEqual({ a: ['1', 2], b: 2 }, { b: 2, a: ['1', 2] });