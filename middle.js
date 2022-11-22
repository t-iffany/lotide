const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION

const middle = function(array) {                       //create middle function and pass array 

  if (array.length <= 2) {                             //if array.length/2 <= 2, return empty []
    return [];
  }

  if (array.length % 2 !== 0) {                        //if array has odd number of elements
    const midIndex = Math.floor(array.length / 2);     //find the middle index  
    return [array[midIndex]];
  }
  if (array.length % 2 === 0) {                       //if array has even number of elements
    const index1 = Math.floor(array.length / 2);
    const index2 = index1 - 1;                        //want the index before index1
    return [array[index2], array[index1]];
  }
};





module.exports = middle;