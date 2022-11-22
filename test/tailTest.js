
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  const words = ['Hello', 'Lighthouse', 'Labs'];
  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns ['Beta' 'Charlie' 'Delta'] for ['Alpha', 'Beta', 'Charlie', 'Delta']", () => {
    assert.deepEqual(tail(['Alpha', 'Beta', 'Charlie', 'Delta']), ['Beta', 'Charlie', 'Delta']);
  });

  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});



/*

// test/tailTest.js

const tail = require('../tail');

// test/assertEqual.js

const assertEqual = require('../assertEqual');

// TEST CODE

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


/* Test Case 2: Check the returned array elements
const result = tail(["Alpha", "Beta", "Charlie", "Delta"]);
assertEqual(result.length, 3); // ensure we get back three elements
assertEqual(result[0], "Beta"); // ensure first element is "Beta"
assertEqual(result[1], "Charlie"); // ensure second element is "Charlie"
assertEqual(result[2], "Delta"); // ensure third element is "Delta"
*/

/* Test Case 3: Array with only one element should yield an empty array for its tail
const result = tail(["Hello"]);
assertEqual(result.length, 0); // ensure we get back 0 elements
const empty = '[]';
tail(empty);
assertEqual(empty, '[]'); // ensure empty array
*/

/* Test Case 4: Empty array should yield an empty array for its tail
const result = tail([]);
assertEqual(result.length, 0); // ensure we get back 0 elements
const empty = '[]'
tail(empty);
assertEqual(empty, '[]'); // ensure empty array
*/

