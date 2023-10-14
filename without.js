//This without function should take in a source array and a itemsToRemove array.It should return a new array with only
//those elements from source that are not present in the itemsToRemove array.

/*eslint linebreak-style: ["error", "windows"]*/
const without = function (source, itemsToRemove) {
  //let itemsRemovedArray = JSON.parse(JSON.stringify(source)); // another method to not affect the original array
  let itemsRemovedArray = source.slice(); // slice() used to create a copy of an array so orginal array doesn't affect
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (itemsRemovedArray.includes(itemsToRemove[i])) {
      // includes method check itemsToRemove[i] in each element of
      //itemsRemovedArray(copy of source) array
      itemsRemovedArray.splice(itemsRemovedArray.indexOf(itemsToRemove[i]), 1);
      // if value presents, 1 value should be removed
      //which is located at that index in itemsRemovedArray. splice returns array with removed element
    }
  }
  return itemsRemovedArray;
};

module.exports = without;