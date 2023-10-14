/*eslint linebreak-style: ["error", "windows"]*/

const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (obj1, obj2) {
  //const inspect = require("util").inspect;//to import util library's inspect function by using require function
  // require() is a built-in function to include external modules that exist in separate files
  if (eqObjects(obj1, obj2)) {
    return true;
    //console.log(`✅✅✅Assertion passed: [${inspect(obj1)}] === [${inspect(obj2)}]`);
  } else {
    return false;
    //console.log(`🛑🛑🛑Assertion failed: [${inspect(obj1)}] === [${inspect(obj2)}]`);
  }
};

module.exports = assertObjectsEqual;

