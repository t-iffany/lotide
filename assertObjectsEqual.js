
// eqArrays function that compares array (function from previous assignment)
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) return false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// eqObjects function
const eqObjects = function(object1, object2) {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);

  if (arr1.length !== arr2.length)              //compare length of the two arrays
    return false;

  for (let key of arr1) {

    /// Implement the eqArrays function to support array value comparisons

    if (Array.isArray(object1[key] || Array.isArray(object2[key]))) {
      return (eqArrays(object1[key], object2[key]));
    }
    else if (object1[key] !== object2[key])             //if they are not arrays, assume values are primitive values and compare with ===
      return false;
  }
  return true;
};


// assertObjects Equal function which will take in two objects and console.log a pass or fail message

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) return(console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};




// TEST CODE

console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2", c: "1" }));