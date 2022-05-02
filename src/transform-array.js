const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  };
  let current = Object.entries(arr);
  let transformedArr = [];
  current.forEach((item, index) => {
    if (item[1] === '--discard-next') {
      if (index === (current.length - 1)) {
        item.push('discard');
      } else {
        item.push('discard');
        current[index + 1].push('discard');
      }
    }
    if (item[1] === '--discard-prev') {
      if(index === 0) {
        item.push('discard');
      } else {
      item.push('discard');
      current[index - 1].push('discard');
      }
    }
    if (item[1] === '--double-next') {
      if (index === (current.length - 1)) {
        item.push('discard');
      } else {
      item.push(current[index + 1][current[index + 1].length - 1]);
      }
    }
    if (item[1] === '--double-prev') {
      if(index === 0) {
        item.push('discard');
      } else {
      item.push(current[index - 1][current[index - 1].length - 1]);
      }
    }
  })
  current.forEach(item => item[item.length - 1] === 'discard' ? '' : transformedArr.push(item[item.length - 1]));
  console.log(current);
  return transformedArr;
}
//

module.exports = {
  transform
};
