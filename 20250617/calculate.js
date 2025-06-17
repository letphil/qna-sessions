/**
 * given an array multiply all odd numbers together
 * then subtract all even numbers in order with first event number being positive
 * then divide bigger number by smaller number
 * and return absolute value rounded to nearest whole number
 *
 * if smaller number is 0 return null
 */

function calculate(arr) {
  return arr.reduce(
    (acc, curr, idx, original) => {
      curr % 2 ? (acc[0] *= curr) : acc[1] ? (acc[1] -= curr) : (acc[1] = curr);
      if (idx + 1 === original.length) {
        // end condition
        let val;
        if (acc[0] < acc[1]) {
          if (acc[0] === 0) return null;
          val = acc[1] / acc[0];
        } else {
          if (acc[1] === 0) return null;
          val = acc[0] / acc[1];
        }
        return Math.round(Math.abs(val));
      }

      return acc;
    },
    [1, undefined]
  );
}

// [-5, 1, 20000, 2, 3]

// let odds = 1;
// let evens; // start at undefined
// for (let i = 0; i < arr.length; i++) {
//   // odd numbers
//   if (arr[i] % 2) {
//     odds *= arr[i];
//   }
//   // even numbers
//   else {
//     if (evens) evens -= arr[i];
//     else evens = arr[i]; // 1st even is positive number
//   }
// }
// if (evens > odds)
// {
//   if (odds)
//     return Math.round(Math.abs(evens / odds));
//   else
//     return null;
//  }
//
//  else
//  {
//    if (evens)
//      return Math.round(Math.abs(evens / odds));
//    else
//      return null;
//  }
// }

// [1, 2, 3, 4, 5, 6]
// 1 * 3 * 5 -> 15
// 2 - 4 - 6 -> -8
// 15 / -8 -> -1.875
// -> 2

console.log(calculate([1, 2, 3, 4, 5, 6]));

module.exports = calculate;
