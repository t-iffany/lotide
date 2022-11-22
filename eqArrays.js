const assertEqual = require('./assertEqual');


const eqArrays = function(a, b) {

  if (a.length !== b.length) return false
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
      return false
    }
  } 
    return true
  }
}


module.exports = eqArrays;