const letterPositions = function(sentence) {
  const results = {};

  //logic to update results here
  for (let i = 0; i < sentence.length; i++) {       //for loop to run through characaters in the sentence
    if (sentence.charAt(i) !== '') {                //keep running if not an empty string
      if (results[sentence.charAt(i)]) {            //if index found for the character in the sentence then,
        results[sentence.charAt(i)].push(i);        //push the index found to results
      } else {
        results[sentence.charAt(i)] = [i];           //else just return the index to result
      }
    }
  }
    return results;
};




//test
console.log(letterPositions('hello'));
console.log(letterPositions('lighthouse in the house'));


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

assertArraysEqual(letterPositions("hello").e, [1]);