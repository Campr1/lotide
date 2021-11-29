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

const without = function(source, itemsToRemove) {
  const newArray = [];
  for (testNum of source) {
    if (!itemsToRemove.includes(testNum)) {
      newArray.push(testNum);
    }
  }
  return newArray;
}

/*without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/
module.exports = without;