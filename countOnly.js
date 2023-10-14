/*eslint linebreak-style: ["error", "windows"]*/

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (var item of allItems) {
    //console.log("item::" + item);
    if (itemsToCount[item]) { //allItems element which are present in itemsToCount only  check , in that which are true, enters if loop
      //itemsToCount["Jason"] returns true
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      //console.log("result-item::" + results[item]);
    }
  }
  return results;
}

module.exports = countOnly;


