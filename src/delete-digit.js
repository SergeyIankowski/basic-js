const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];
  let arrayNumber = String(n).split('');
  for(let key = 0; key < arrayNumber.length; key++) {
    result.push(+(arrayNumber.map((digit, index) => index === key ? '' : digit).join('')));
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
