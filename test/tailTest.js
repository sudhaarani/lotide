
const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", function () {
  it(" returns [2, 3] for [1,2,3]", function () {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it(" returns [] for ['5']", function () {
    assert.deepEqual(tail(["5"]), []);
  });
  it(" returns ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs'] ", function () {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
});

// const numbers = [1, 2, 3];
// const result = tail(numbers);
// //console.log(result);
// assertEqual(numbers.length, 3); // checking length of original array after calling tail function
// assertEqual(result.length, 2);// checking length of return array value of tail funtion
// assertEqual(result[0], 2);// cannot compare 2 arrays with "===","==" so alternative way is checking each element of array
// assertEqual(result[1], 3);