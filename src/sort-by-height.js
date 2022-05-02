const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let markeredArr = arr.map(number => {
    if (number === -1) {
      return [-1, 'stay'];
    };
    return [number, 'sort'];
  })

  let sortArr = [];

  markeredArr.forEach(item => item[1] === 'sort' ? sortArr.push(item) : '');

  sortArr.sort((a, b) => a[0] - b[0]);

  let resultArr = markeredArr.map(item => item[1] === 'sort' ? sortArr.shift()[0] : item[0]);
  return resultArr;
}

module.exports = {
  sortByHeight
};
