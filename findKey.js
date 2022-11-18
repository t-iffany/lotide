// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// findKey function takes in an object and a callback
// It should scan the object and return the first key for which the callback returns a truthy value. 
// If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  //turn keys in object into an array Object.keys(object) is same as doing const newArray = Object.keys(object)
  // loop the object to find keys within object which the callback returns a truthy value
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};



// TEST CASES

results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(results, "noma");


results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3); // => "Akaleri"

assertEqual(results, "Akaleri");


results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 5); // => undefined

assertEqual(results, undefined);
