const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'} = options;
  
  let additionString = String(addition);
  
  for(let key = 1; key < additionRepeatTimes; key++) {
    additionString += additionSeparator + String(addition);
  }
  let template = String(str) + additionString;
  let mainString = template;
  for(let key = 1; key < repeatTimes; key++) {
    mainString += separator + template;
  }
  return mainString;
}
//

module.exports = {
  repeater
};
