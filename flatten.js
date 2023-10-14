//Given an array with other arrays inside, it can flatten it into a single-level array.
/*eslint linebreak-style: ["error", "windows"]*/

const flatten = function (Arr1) {
  let newArr = [];
  for (let i = 0; i < Arr1.length; i++) {
    if (Array.isArray(Arr1[i])) { // array element is an array or not
      for (let j = 0; j < Arr1[i].length; j++) {
        newArr.push(Arr1[i][j]); // pushing each array of array elements
      }
    }
    if (!Array.isArray(Arr1[i])) {
      newArr.push(Arr1[i]);
    }
  }
  return newArr;
};

module.exports = flatten;
