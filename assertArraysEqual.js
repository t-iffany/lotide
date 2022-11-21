const eqArrays = require('./eqArrays');

const assertArraysEqual = function(a, b) {
  
  if (eqArrays(a, b)) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`)
  } 
};


/* Previous attempt
  if (a.length !== b.length) return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return console.log()`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
};

// Reason that updated code is better:
(a.length === b.length) is equivalent to eqArrays(a, b) true
(a.length !== b.length) is equivalent to !eqArrays(a, b)

*/

module.exports = assertArraysEqual;




