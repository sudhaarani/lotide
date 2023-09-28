//This without function should take in a source array and a itemsToRemove array.It should return a new array with only 
//those elements from source that are not present in the itemsToRemove array.

/*eslint linebreak-style: ["error", "windows"]*/
const assertArraysEqual = function (Arr1, Arr2) {// to give clear output through console.log
  if (eqArrays(Arr1, Arr2)) {
    console.log(`✅✅✅Assertion passed: [${Arr1}] === [${Arr2}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: [${Arr1}] === [${Arr2}]`);
  }
};
const eqArrays = function (Arr1, Arr2) {//chcks each array elements are equal
  if (Arr1.length !== Arr2.length) {
    return false;
  }
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1[i] !== Arr2[i]) {
      return false;
    }
  }
  return true;
};
const without = function (source, itemsToRemove) {
  //let itemsRemovedArray = JSON.parse(JSON.stringify(source)); // another method to not affect the original array
  let itemsRemovedArray = source.slice(); // slice() used to create a copy of an array so orginal array doesn't affect
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (itemsRemovedArray.includes(itemsToRemove[i])) {// includes method check itemsToRemove[i] in each element of 
      //itemsRemovedArray(copy of source) array
      itemsRemovedArray.splice(itemsRemovedArray.indexOf(itemsToRemove[i]), 1);// if value presents, 1 value should be removed
      //which is located at that index in itemsRemovedArray. splice returns array with removed element
    }
  }
  return itemsRemovedArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, "2", "3"], ["2", 2, "3"])); // [1,"2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log("words:" + words);

assertArraysEqual(words, ["hello", "world", "lighthouse"]); //checking original array is not modified after calling the without func

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
