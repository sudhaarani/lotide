/*eslint linebreak-style: ["error", "windows"]*/
//assertArraysEqual can compare complex data types like arrays.
const assertArraysEqual = function (Arr1, Arr2) {
  if (eqArrays(Arr1, Arr2)) {
    console.log(`✅✅✅Assertion passed: [${Arr1}] === [${Arr2}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: [${Arr1}] === [${Arr2}]`);
  }
};
const eqArrays = function (Arr1, Arr2) {
  if (Arr1.length !== Arr2.length) {
    return false;
  }
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1[i] !== Arr2[i]) {
      return false;
    }
  }
  return true;
};

//The function will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback / predicate returns a truthy value.
const takeUntil = function (array, callback) {
  const filteredArr = [];
  for (element of array) {
    if (callback(element)) {//once the condition is met, stops the loop from pushing into filteredArr so it will skip remaining array elements
      break;
    }
    else {
      filteredArr.push(element);// pushes the array elements in filteredArr until the condition is met 
    }
  }
  return filteredArr;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

const data3 = ["🍫", "🍫", "🍫", "🍇", "🍫"];
const results3 = takeUntil(data3, x => x === '🍇');
console.log(results3);
assertArraysEqual(takeUntil(data3, x => x === '🍇'), ["🍫", "🍫", "🍫"]);


// OUTPUT::
// [1, 2, 5, 7, 2]
// ["I've", 'been', 'to', 'Hollywood']
// ['🍫', '🍫', '🍫']