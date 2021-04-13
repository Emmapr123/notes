'use strict';

function describe(description, callback) {
  console.log(description);
  callback();
}

function it(description, callback) {
  console.log(description);
  callback();
}

function expect(input) {
  return {
    toEqual: function(expectedResult) {
      if (input === expectedResult) {
        console.log("Pass");
      } else {
        console.log("Fail")
      }
    },
    toInclude: function(expectedMatch) {
      if (input.includes(expectedMatch)) {
        console.log("Pass");
      } else {
        console.log("Fail")
      }
    },
    toNotInclude: function(expectedMatch) {
      if (input.includes(expectedMatch)) {
        console.log("Fail");
      } else {
        console.log("Pass")
      }
    }
  }
}
