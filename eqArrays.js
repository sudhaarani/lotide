/*eslint linebreak-style: ["error", "windows"]*/

const eqArrays = function (Arr1, Arr2) {
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
//console.log(eqArrays(["1", "2", "3"], []));

module.exports = eqArrays;
