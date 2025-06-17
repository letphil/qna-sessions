const calculate = require("./calculate.js");

test("should equal 2", function () {
  expect(calculate([1, 2, 3, 4, 5, 6])).toBe(2);
});
