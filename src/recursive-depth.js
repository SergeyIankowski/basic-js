const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let deeps = [];
    if (!Array.isArray(arr)) {
      return 0;
    };
    if (arr.length === 0) {
      return 1;
    }
    arr.forEach(item => {
      if (Array.isArray(item)) {
        deeps.push(1 + this.calculateDepth(item));
      } else {
        deeps.push(1);
      }
    })

    let current = Math.max(...deeps);
    console.log(deeps);
    return current;
  }
}
//

module.exports = {
  DepthCalculator
};
