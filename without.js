const assertArraysEqual = function(a, b) {

  if (a.length !== b.length) return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
};

const eqArrays = function(a, b) {                        // compares 2 arrays to see if they are identical

  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};


const without = function(source, itemsToRemove) {
  let answer = [];                                             //empty array for final answer 
  for (let i = 0; i < source.length; i++) {                    //to run through each string in [source]
    if (!itemsToRemove.includes(source[i])) {                  //check if itemsToRemove has any variables that are identical in source/what we just ran through
      answer.push(source[i]);                                  //false = variables were not in source, thus push to add those variables to our source[i] list
    }
  }
  return answer;                                                //return new array with elements from source and not in itemsToRemove
};




/* if strings are identical, do not return
//test cases
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
*/