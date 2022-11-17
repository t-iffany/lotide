
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

// Function will take in two objects and returns true or false, based on a perfect match
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
    if (object1[key] !== object2[key]) {            //if they are not arrays, assume values are primitive values and compare with ===
      return false;
    }
  }
  return true;
};





//assertEqual function to test

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const x = { a: '1', b: '2' };
const y = { a: '1', b: '2' };
console.log(eqObjects(x, y));  // true

const z = { a: '1', b: '2', c: '3' };
console.log(eqObjects(x, z)); // false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false