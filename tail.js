const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};


/* Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
*/

// Test Case 2: Check the returned array elements
const result = tail(["Alpha", "Beta", "Charlie", "Delta"]);
assertEqual(result.length, 3); // ensure we get back three elements
assertEqual(result[0], "Beta"); // ensure first element is "Beta"
assertEqual(result[1], "Charlie"); // ensure second element is "Charlie"
assertEqual(result[2], "Delta"); // ensure third element is "Delta"


/* Test Case 3: Array with only one element should yield an empty array for its tail
const result = tail(["Hello"]);
assertEqual(result.length, 0); // ensure we get back 0 elements
assertEqual(result[0], '[]'); // ensure empty array
*/

/* Test Case 4: Empty array should yield an empty array for its tail
const result = tail([]);
assertEqual(result.length, 0); // ensure we get back 0 elements
assertEqual(result[0], '[]'); // ensure empty array
*/