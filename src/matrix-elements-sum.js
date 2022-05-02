const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let resultMatrix = [];
  for(let key = 0; key < matrix.length; key++) {
    resultMatrix.push(matrix[key].map((item, index) => {
      if(matrix[key - 1]) {
      return matrix[key - 1][index] === 0 ? 0 : item;
      } else {
        return item;
      }
    }));
  }
  return resultMatrix.reduce((sum, arr) => sum + arr.reduce((sum, item) => sum + item, 0), 0);
}

module.exports = {
  getMatrixElementsSum
};
