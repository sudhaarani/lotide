/*eslint linebreak-style: ["error", "windows"]*/
// assertEqual can only compare primitive values, not complex data types like arrays or objects.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: [${actual}] === [ ${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: [${actual}] !== [ ${expected}]`);
  }
};

const findKey = function (object1, callback) {
  for (key1 of Object.keys(object1)) { // to get key_names in object we use Object.keys(Object_name)
    //console.log(key1);
    //console.log(object1[key1].stars);
    if (callback(object1[key1])) { //if we use object1[key1].stars, we ill get value of 1,3,2,3,2,3,2 
      return key1;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma")