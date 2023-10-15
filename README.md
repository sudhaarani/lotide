# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @dhaarani/lotide`

**Require it:**

`const _ = require('@dhaarani/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element in the array.
* `tail(array)`: returns the tail of an array except first element(0th index element).
* `middle(array)`: returns an array with only the middle element(s) of the provided array.
* `eqArrays(array1,array2)`: compares two arrays and  returns true or false, based on a perfect match.
* `assertArraysEqual(array1,array2)`: compares two arrays and asserts it by returning boolean value.
* `assertEqual(value1,value2)`: compares two primitive values and asserts it by returning boolean value.
* `assertObjectsEqual(object1,object2)`: compares two Objects and asserts it by returning boolean value.
* `countLetters(string)`: returns count of each letter in the given string/sentence as object.
* `countOnly(array,object)`: return an object containing counts of everything that the input object listed.
* `eqObjects(object1,object2)`: compares two objects and returns true or false, based on a perfect match.
* `findKey(object,callback)`: return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(object,value)`: return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(nestedArr)`: returns a flattened single-level array.
* `without(sourceArr,itemsToRemoveArr)`: return a new array with only those elements from source that are not present in the itemsToRemove array.
* `takeUntil(array,callback)`: return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `letterPositions(string)`: return all the indices (zero-based positions) in the string where each character is found.
* `map(array,callback)`: return a new array based on the results of the callback function.
