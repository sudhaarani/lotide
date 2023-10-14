/*eslint linebreak-style: ["error", "windows"]*/

const findKey = function (object1, callback) {
  for (let key1 of Object.keys(object1)) { // to get key_names in object we use Object.keys(Object_name)
    //console.log(key1);
    //console.log(object1[key1].stars);
    if (callback(object1[key1])) { /*if we use object1[key1].stars, we ill get value of 1,3,2,3,2,3,2 */
      return key1;
    }
  }
};

module.exports = findKey;


