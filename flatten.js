const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr)) {
     return arr.flat();
    }
  }
  
}

module.exports = flatten;