/*eslint linebreak-style: ["error", "windows"]*/

const countLetters = function (sentence) {
  let countLetter = {};
  sentence = sentence.replace(/\s/g, '');
  for (let char of sentence) {
    // console.log(typeof char);
    if (countLetter[char]) {
      countLetter[char] += 1;
    } else {
      countLetter[char] = 1;
    }
  }
  return countLetter;
};


module.exports = countLetters;