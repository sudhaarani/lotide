const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], []), false);

assertEqual(eqArrays(["1", null, "3"], ["1", "2", "3"]), false);
assertEqual(eqArrays([undefined, "2", "3"], ["1", "2", "3"]), false);