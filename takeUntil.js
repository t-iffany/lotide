const assertArraysEqual = function(a, b) {

  if (a.length !== b.length) return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
};

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


/*
function will take in two parameters:
1) The array to work with
2) The callback (which Lodash calls "predicate")
Function will return a "slice of the array with elements taken from the beginning"
takeUntil should keep collecting items from a provided array until the callback provided returns a truthy value
*/


// takeUntil function returns strings in the array until it hits the callback value, then the loop stops

const takeUntil = function(array, callback) {
  const output = [];
  for (const element of array) {
    if (!callback(element)) {            //returns result depending on true or false
      output.push(element);        //store elements in the output array
    } else {
      break;
    }
  }
  return output;
};


// TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);



/* If refactor using arrow function, just remove 'function'

const takeUntil = (array, callback) => {
  const output = [];
  for (const element of array) {
    if (!callback(element)) {            
      output.push(element);      
    } else {
      break;
    }
  }
  return output;
};

*/