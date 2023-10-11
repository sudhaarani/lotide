
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], []);

assertArraysEqual(["1", null, "3"], ["1", "2", "3"]);
assertArraysEqual([undefined, "2", "3"], ["1", "2", "3"]);