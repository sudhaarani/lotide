/*eslint linebreak-style: ["error", "windows"]*/
// assertEqual can only compare primitive values, not complex data types like arrays or objects.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion passed: [${ actual }] === [ ${ expected }]`);
  } else {
    console.log(`🛑Assertion failed: [${actual}] !== [ ${expected}]`);
  }
};

module.exports = assertEqual;