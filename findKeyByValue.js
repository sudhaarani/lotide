/*eslint linebreak-style: ["error", "windows"]*/

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

module.exports = findKeyByValue;


