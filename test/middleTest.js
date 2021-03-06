const middle = require('../middle');
const assert = require('chai').assert;

describe("middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns empty for [1, 2]", () => {
      assert.deepEqual(middle([1, 2]), []);
    });
  
  it("returns 2, 3 for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
});

});







/*console.log(middle([1])); 
console.log(middle([1, 2]));

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
*/