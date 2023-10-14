/*eslint linebreak-style: ["error", "windows"]*/


//We'll implement a new function letterPositions which will return all the indices (zero-based positions) 
//in the string where each character is found.

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  let i = 0;
  for (ele of sentence) {
    if (ele in results) {//checking key-value if available or not in results object
      results[ele].push(i); // if key available ,pushing that index in existing key
    } else {
      results[ele] = [i]; // creating key with (index as)value if not available in results object
    }
    i++; // incrementing index 
  }
  delete results[" "];// skips the space while returning if space is present, but space position is counted
  return results;
};


module.exports = letterPositions;