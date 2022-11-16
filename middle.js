const eqArrays = function(a, b) {                        // compares 2 arrays to see if they are identical

  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(a, b) {

  if (a.length !== b.length) return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
};


// ACTUAL FUNCTION

const middle = function(array) {                       //create middle function and pass array 

  if (array.length <= 2) {                             //if array.length/2 <= 2, return empty []
    return console.log([]);
  }

  if (array.length % 2 !== 0) {                        //if array has odd number of elements
    const midIndex = Math.floor(array.length / 2);     //find the middle index  
    return [array[midIndex]];
  }
  if (array.length % 2 === 0) {                       //if array has even number of elements
    const index1 = Math.floor(array.length / 2);
    const index2 = index1 - 1;                        //want the index before index1
    return [array[index2], array[index1]];
  }
};




/*test cases

let result = middle([1]); // => []
console.log(result);
result = middle([1, 2]); // => []
console.log(result);

result = middle([1, 2, 3]); // => [2]
console.log(result);
result = middle([1, 2, 3, 4, 5]); // => [3]
console.log(result);

result = middle([1, 2, 3, 4]); // => [2, 3]
console.log(result);
result = middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
console.log(result);

*/