const oneCount = require("./one-count.js");

test("should count up all the ones in array", function () {
  expect(oneCount([1, 1, 1, 1, 2, 2, 1, 1, 4])).toBe(6);
});
