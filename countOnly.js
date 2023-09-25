/*eslint linebreak-style: ["error", "windows"]*/
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: [${actual}] === [ ${expected}]`);
  } else {
    console.log(`Assertion failed: [${actual}] !== [ ${expected}]`);
  }
};
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (var item of allItems) {
    //console.log("item::" + item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      //console.log("result-item::" + results[item]);
    }
  }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


