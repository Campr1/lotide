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

const takeUntil = function(array, callback) {
  newArr = [];
    for (let elem of array) {
      if (callback(elem) === true) {
        return newArr;
      } else {
        newArr.push(elem);
      } 
    }
    return newArr;
  }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
