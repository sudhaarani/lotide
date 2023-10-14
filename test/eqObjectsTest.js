// assertEqual can only compare primitive values, not complex data types like arrays or objects.

const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", function () {
  //primitive As value
  it(`returns true for comparing two Objects { color: "red", size: "medium" } and { size: "medium", color: "red" } where values are primitive`, function () {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
  it(`returns false for comparing two Objects { color: "red", size: "medium" } and { size: "medium", color: "red", sleeveLength: "long" } where values are primitive`, function () {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });
  //Arrays as value
  it(`returns true for comparing two Objects { colors: ["red", "blue"], size: "medium" } and { size: "medium", colors: ["red", "blue"] } where values are array`, function () {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });
  it(`returns false for comparing two Objects { colors: ["red", "blue"], size: "medium" } and { size: "medium", colors: ["red", "blue"], sleeveLength: "long" } where values are array`, function () {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });
});


// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion passed: [${actual}] === [ ${expected}]`);
//   } else {
//     console.log(`Assertion failed: [${actual}] !== [ ${expected}]`);
//   }
// };
// const eqArrays = function (Arr1, Arr2) { //to compare array values
//   if (Arr1.length !== Arr2.length) {
//     return false
//   }
//   for (let i = 0; i < Arr1.length; i++) {
//     if (Arr1[i] !== Arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


//TESTCASES FOR REFERENCE:

//primitive As values --- it needs assertEqual
/*const shirtObject = { color: "red", size: "medium" };
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
*/