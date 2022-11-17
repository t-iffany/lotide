const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(word) {
  const results = {};

  for (const letter of Array.from(word)) {          //loop over letters in word
    const x = 0;
    if (results[letter]) {                         //checking to see if we've already encountered this letter
      results[letter] += 1;
    } else {                                       //if not encountered, create this for the letter
      results[letter] = x + 1;
    }
  }
//  console.log(results);
  return results;
};



//did not remove the counting of empty space


/* TEST CODE

console.log(countLetters('LHL'));
console.log(countLetters('lighthouse in the house'));
//

const sample = "LHL";

const result1 = countLetters(sample);

assertEqual(result1["L"], 2); //true
assertEqual(result1["H"], 1); //true
*/