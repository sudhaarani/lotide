
const findKey = require("../findKey");
const expect = require("chai").expect;

describe("#findKey takes an object and a callback function as input.", () => {
  it(`Here it returns 'noma' for an object 
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 } and a callback function x => x.stars === 2`, () => expect(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2)).to.equal("noma"));
});


// // assertEqual can only compare primitive values, not complex data types like arrays or objects.
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion passed: [${actual}] === [ ${expected}]`);
//   } else {
//     console.log(`🛑🛑🛑Assertion failed: [${actual}] !== [ ${expected}]`);
//   }
// };

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2), "noma");