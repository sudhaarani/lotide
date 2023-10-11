/*eslint linebreak-style: ["error", "windows"]*/

//IMPLEMENTATION OF TAIL
const tail = function (arr) {
  let tailarr = [];
  for (let i = 1; i < arr.length; i++) {//pushing array values except 1st(0th index) element so i=1
    tailarr.push(arr[i]);
  }
  return tailarr;
};

module.exports = tail;


