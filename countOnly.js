const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



//function should report back how many instances of each string were found in the allItems array of strings.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};                                      //empty object for final answer

  for (const item of allItems) {                           //loop over all items in the allItems array
    console.log(item);                                     //prints all the items in the array

    // inside the loop, increment the counter for each item:
    // set a property with that string key to: the value that was already there (or zero if nothing there) with 1 added to it.

    if (itemsToCount[item]) {                              //only count if the item is found in the itemsToCount object
      if (results[item]) {                                 //if item is found in the array then,
        results[item] += 1;                                //increment the count of each item into results as we encounter each string item in the array
      } else {
        results[item] = 1;                                 //otherwise return 1
      }
    }
  }
  console.log(results);                                    
  return results;                                            //return the count of each string that were found in allItems, as specified by itemsToCount
};




//test code

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); //true
assertEqual(result1["Karima"], undefined); //true
assertEqual(result1["Fang"], 2); //true
assertEqual(result1["Agouhanna"], undefined); //true