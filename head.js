/*eslint linebreak-style: ["error", "windows"]*/
//IMPLEMENTATION OF ASSERTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion failed: [${actual}] !== [${expected}]`);
  }
};

//IMPLEMENTATION OF HEAD
const head = function(arr) {
  return arr[0];
};

assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");