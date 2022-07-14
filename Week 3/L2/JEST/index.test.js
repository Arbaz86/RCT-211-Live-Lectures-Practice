const sum = require("./index.js");

describe("Testing sum fucntion", () => {
  //test suite
  test("add 2 positive number", () => {
    //tests
    //toBe => === stric equality
    expect(sum(1, 2)).toBe(3);
  });
});

//TDD
/*
1. Tests -> Behaviour
2. Function/Application
*/

//Expectations
//Actual Results
