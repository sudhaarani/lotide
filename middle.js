/*eslint linebreak-style: ["error", "windows"]*/

//The middle function should return an array with only the middle element(s) of the provided array. 
//This means that the length of the returned elements could vary.
const middle = function (Arr1) {
  let newArr = [];
  if (Arr1.length > 2 && Arr1.length % 2 === 0) { //length is even
    let midindex = Arr1.length / 2;
    newArr.push(Arr1[midindex - 1]);
    newArr.push(Arr1[midindex]);
  }
  if (Arr1.length > 2 && Arr1.length % 2 === 1) { //length is odd
    let midindex = Math.floor(Arr1.length / 2); //dividing the length ,gives float value 
    newArr.push(Arr1[midindex]);
  }
  return newArr;
};
// console.log(middle([1])); // no middle element so returns empty array
// console.log(middle([1, 2])); //no middle element so returns empty array
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(middle([1, 2, 3, null, 5, 6, 7, 8, 9, 10]));

module.exports = middle;