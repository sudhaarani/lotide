/*eslint linebreak-style: ["error", "windows"]*/
//IMPLEMENTATION OF ASSERTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: [${actual}] === [ ${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: [${actual}] !== [ ${expected}]`);
  }
};

//IMPLEMENTATION OF TAIL
const tail = function(arr) {
  let tailarr = [];
  for (let i = 1; i < arr.length; i++) {
    tailarr.push(arr[i]);
  }
  return tailarr;
};

const numbers = [1, 2, 3];
const result = tail(numbers);
assertEqual(numbers.length, 3); // checking length of original array after calling tail function
assertEqual(result.length, 2);// checking length of return array value of tail funtion
// assertEqual(result[0], 2);// cannot compare 2 arrays with "===","==" so alternative way is checking each element of array
// assertEqual(result[1], 3);

