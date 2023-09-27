/*eslint linebreak-style: ["error", "windows"]*/
// assertEqual can only compare primitive values, not complex data types like arrays or objects.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: [${actual}] === [ ${expected}]`);
  } else {
    console.log(`Assertion failed: [${actual}] !== [ ${expected}]`);
  }
};
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
//primitive As values --- it needs assertEqual
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

//Arrays as values---needs assertEqual for primitives and eqArrays for array
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);