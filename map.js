/*eslint linebreak-style: ["error", "windows"]*/

const map = function (array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item)); // callback(item) returns first letter of each word and length of each element
  }
  return results;
};

module.exports = map;
