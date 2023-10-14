const map = require("../map");
const expect = require("chai").expect;

describe("#map takes an array and a callback function as input. ", function () {
  it("Here it returns [6, 7, 2, 5, 3]i.e length of each element for given array and callback function element => element.length.", function () {
    const words = ["ground", "control", "to", "major", "tom"];
    expect(map(words, element => element.length)).to.deep.equal([6, 7, 2, 5, 3]);
  });
  it(`Here it returns ["g","c","t","m","t"]i.e first letter of each element for given array and callback function element => element[0].`, function () {
    const words = ["ground", "control", "to", "major", "tom"];
    expect(map(words, element => element[0])).to.eql(["g", "c", "t", "m", "t"]);
  });
});


// const result = map(words, element => element[0]);
// console.log(result);

// assertArraysEqual(map(words, element => element.length), [6, 7, 2, 5, 3]);
// assertArraysEqual(map(words, element => element + " appended"), ["ground appended", "control appended", "to appended", "major appended", "tom appended"]);

