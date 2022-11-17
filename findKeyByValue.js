// Function that searches for a key on an object where its value matches a given value

const findKeyByValue = function(object, value) {
  const newArray = Object.keys(object);             //turn keys and values in object into an array

  for (let key of newArray) {                //loop the array to find keys within object that match the value
    if (object[key] === value) {             //ie. run "The Wire" and return its key, which is 'drama'
      return key;
    }
  }
};






//assertEqual function to test

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CASES

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);