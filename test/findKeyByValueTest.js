const findKeyByValue = require("../findKeyByValue");
const expect = require("chai").expect;


describe("#findKeyByValue takes an object and a value as input and returns keyName of that value.", () => {
  it(`Here it returns 'drama' for an object 
     sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire" `, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    expect(findKeyByValue(bestTVShowsByGenre, "The Wire")).to.equal("drama");
  });
  it(`Here it returns '"That '70s Show"' for an object 
     sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire" `, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    expect(findKeyByValue(bestTVShowsByGenre, "That '70s Show")).to.equal(undefined);
  });
});

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);