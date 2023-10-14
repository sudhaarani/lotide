/*eslint linebreak-style: ["error", "windows"]*/

//The function will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback / predicate returns a truthy value.
const takeUntil = function (array, callback) {
  const filteredArr = [];
  for (let element of array) {
    if (callback(element)) { //once the condition is met, stops the loop from pushing into filteredArr so it will skip remaining array elements
      break;
    } else {
      filteredArr.push(element);
      // pushes the array elements in filteredArr until the condition is met
    }
  }
  return filteredArr;
};

module.exports = takeUntil;

