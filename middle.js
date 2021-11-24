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

const middle = function(array){
  if(array.length <= 2)
  return [];

  const middleIn = array.length / 2;
  if (array.length % 2 === 1) {
    return [array[Math.floor(middleIn)]]; 
  }else {
    return [
    array[middleIn - 1], array[middleIn]  
    ];
  }
}
console.log(middle([1])); 
console.log(middle([1, 2]));

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4