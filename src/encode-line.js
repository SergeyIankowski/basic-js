const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let letterStack = [];
  let getValue = (stack) => {
      switch(stack.length) {
        case 0: return current = ''; break;
        case 1: return current = `${stack[stack.length - 1]}`; break;
        default: return current = `${stack.length}${stack[stack.length - 1]}`;
      }
    }
  let result = str.split('').map(letter => {
    if(letterStack.length === 0) {
      letterStack.push(letter);
      return '';
    };
    if(letter === letterStack[letterStack.length - 1]) {
      letterStack.push(letter);
    } else {
        let current = getValue(letterStack);
        letterStack = [];
        letterStack.push(letter)
        return current;
      }
    }
  );
  result.push(getValue(letterStack));
  return result.join('');
}

module.exports = {
  encodeLine
};
