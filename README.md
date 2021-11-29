# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function 1(head)`: returns the first element of an array
* `function (tail)`: returns all except the first element of an array
* `function (middle)`: returns the middle element(s) of an array
* `function (map)`: returns a new array based on the results of the callback function
* `function (countLetters)`: returns an object with the number count of each letter in a string
* `function (eqArrays)`: takes in two arrays and returns true or false, based on a perfect match
* `function (countOnly)`: takes in a collection of items and return counts for a specific subset of items
* `function (letterPositons)`:returns an object of letters in a string with their corresponding index value
* `function (findKey)`: returns the corresponding key name of a desired value
* `function (takeUntil)`: keeps collecting items from a provided array until the callback provided returns a truthy value
* `function (without)`: return a subset of a given array, removing unwanted elements
* `function (findKeyByValue)`: scans the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined
* `function (eqObjects)`: takes in two objects and returns true or false, based on a perfect match
