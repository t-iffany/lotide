const assertArraysEqual = function(a, b) {

  if (a.length !== b.length) return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
};

/*
Our map function will take in two arguments:
1) An array to map
2) A callback function
The map function will return a new array based on the results of the callback function.
*/

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};




//Test code

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// use the assertArraysEqual function with two parameters, left is your results/output, right you manually put in your expected out/result


const eqArrays = function(a, b) {

  if (a.length !== b.length) return false;
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};