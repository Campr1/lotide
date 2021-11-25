const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])){
        return false;
      }
    }else if (array1[i] !== array2[i]){
      return false
    }
  }
  return true
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
console.log(`✅ Assertation Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertation Failed: ${array1} !== ${array2}`);
  }
}

let map = function (array, callback){
  const results = [];
  for(let item of array){
   results.push(callback(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["G", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["g", "c", "t", "P", "t"]);