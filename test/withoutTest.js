const without = require("../without");
const expect = require("chai").expect;

describe("#without takes in a source array and a itemsToRemove array.It should return a new array with only those elements from source that are not present in the itemsToRemove array.", function () {
  it(`Here it returns [2,3] for "[1, 2, 3]", "[1]"`, function () {
    expect(without([1, 2, 3], [1])).to.deep.equal([2, 3]);
  });
  it(`Here it returns ["hello", "world"] for "["hello", "world", "lighthouse"]", "["lighthouse"]"`, function () {
    expect(without(["hello", "world", "lighthouse"], ["lighthouse"])).to.eql(["hello", "world"]);
  });
});


// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without([1, "2", "3"], ["2", 2, "3"])); // [1,"2"]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));
// console.log("words:", words);

// assertArraysEqual(words, ["hello", "world", "lighthouse"]); //checking original array is not modified after calling the without func

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
