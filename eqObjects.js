/*eslint linebreak-style: ["error", "windows"]*/
const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  // console.log(key1 + "::" + key2);
  if (key1.length !== key2.length) { //comparing key length
    return false;
  }
  for (let key of key1) { //looping through one of the keys as length is equal
    if (object1[key] !== object2[key]) { //2 object-values are not equal(i.e) object-values are array
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

module.exports = eqObjects;
