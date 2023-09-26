/*eslint linebreak-style: ["error", "windows"]*/
// assertEqual can only compare primitive values, not complex data types like arrays or objects.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: [${actual}] === [ ${expected}]`);
  } else {
    console.log(`Assertion failed: [${actual}] !== [ ${expected}]`);
  }
};

const findKeyByValue = function (givenObj, givenValue) {
  /* for (let keyName in givenObj) { // for..in using just ObjectName_we_use
       if (givenObj[keyName] === givenValue) {
         return keyName;                 //works fine
        }
      }*/
  // another method for reference
  for (let keyName of Object.keys(givenObj)) {  // for..of using Object.keys(ObjectName_we_use)
    if (givenObj[keyName] === givenValue) {
      return keyName;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

