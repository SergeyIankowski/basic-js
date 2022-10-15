const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const initialMatrix = matrix.map(row => row.map(item => 0));
  const incrementValues = (x, y, matr) => {
    if (x < matr.length && y < matr[x].length) {
      matr[x][y]++;
      if (x - 1 >= 0) { matr[x - 1][y]++ }; //x-1, y
      if (x - 1 >= 0 && y - 1) { matr[x - 1][y - 1]++ }; //x-1, y-1
      if (x + 1 < matr.length) { matr[x + 1][y]++ }; //x+1, y
      if (x + 1 < matr.length && y + 1 < matr[x].length) { matr[x + 1][y + 1]++ }; //x+1, y+1
      if (y - 1 >= 0) { matr[x][y - 1]++ }; // x, y-1
      if (y + 1 < matr[x].length) { matr[x][y + 1]++ }; //x, y+1
      if (x + 1 < matr.length && y - 1 >= 0) { matr[x + 1][y - 1]++ } //x+1, y-1
      if (x - 1 >= 0 && y + 1 < matr[x].length) { matr[x - 1][y + 1]++ } // x-1, y+1
    }
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c]) {
        incrementValues(r, c, initialMatrix);
        initialMatrix[r][c] = 1;
      }
    }
  }
  return initialMatrix;
}

module.exports = {
  minesweeper
};
