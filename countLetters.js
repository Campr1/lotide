const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let stringCount = {};
  let string = letters.split(" ").join();
  for (let letter of string) {
    if (stringCount[letter]) {
      stringCount[letter]++;
    }else {
      stringCount[letter] = 1;
    }
  }
  return stringCount;
}

const counter = countLetters("Lighthouse Labs");
assertEqual(counter["L"], 2);
assertEqual(counter["s"], 2);
assertEqual(counter["o"], 4);