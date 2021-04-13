'use strict';

function describe(description, callback) {
  console.log(description);
  callback();
}

function it(description, callback) {
  console.log(description);
  callback();
}

function expect(action) {
  return {
    toEqual: function(expectedResult) {
      if (action === expectedResult) {
        console.log("Pass");
      } else {
        console.log("Fail")
      }
    }
  }
}
