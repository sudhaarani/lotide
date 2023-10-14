const takeUntil = require("../takeUntil");
const expect = require("chai").expect;

describe("#takeUntil takes an array and a callback function as input. It returns slice of the given array until the callback / predicate returns a truthy value ", function () {
  it("Here it returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5] and callback function x => x < 0.", function () {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    expect(takeUntil(data1, x => x < 0)).to.deep.equal([1, 2, 5, 7, 2]);
  });
  it(`Here it returns ["🍫", "🍫", "🍫"] for ["🍫", "🍫", "🍫", "🍇", "🍫"] and callback function x => x === '🍇'.`, function () {
    const data2 = ["🍫", "🍫", "🍫", "🍇", "🍫"];
    expect(takeUntil(data2, x => x === '🍇')).to.eql(["🍫", "🍫", "🍫"]);
  });
});

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
// assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

// const data3 = ["🍫", "🍫", "🍫", "🍇", "🍫"];
// const results3 = takeUntil(data3, x => x === '🍇');
// console.log(results3);
// assertArraysEqual(takeUntil(data3, x => x === '🍇'), ["🍫", "🍫", "🍫"]);


// OUTPUT::
// [1, 2, 5, 7, 2]
// ["I've", 'been', 'to', 'Hollywood']
// ['🍫', '🍫', '🍫']