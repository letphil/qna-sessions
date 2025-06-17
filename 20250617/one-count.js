/**
 *
 * @param {Array} arr - array of numbers
 * @returns {Number} returns number of ones
 * @description - function takes array and returns count of ones
 */
function oneCount(arr) {
  // let count = 0;
  // arr.forEach((el) => {
  //   el === 1 && ++count;
  // });
  // return count;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == 1) ++count;
  // }
  // return count;

  // return arr.reduce((acc, curr) => (curr === 1 ? acc + 1 : acc), 0);

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 1) return i;
  }
}

module.exports = oneCount;
