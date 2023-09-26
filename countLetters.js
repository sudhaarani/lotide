/*eslint linebreak-style: ["error", "windows"]*/
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: [${actual}] === [ ${expected}]`);
  } else {
    console.log(`Assertion failed: [${actual}] !== [ ${expected}]`);
  }
};

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
console.log(countLetters("happy kayaking"));
const output = countLetters("happy kayaking");

assertEqual(output["p"], 2);
assertEqual(countLetters("happy kayaking").h, 1); // can be checked in both cases

assertEqual(output["k"], 2);

assertEqual(output["h"], 1);