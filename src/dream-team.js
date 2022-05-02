const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(matrix) {
  let result = [];
  if(!Array.isArray(matrix)) {
    return false;
  }
  matrix.forEach(word => {
    if(typeof word === 'string') {
      if(word.includes(' ')) {
        word = word.split('').filter(letter => letter === ' ' ? false : letter);
      }
      result.push(word[0].toUpperCase());
    }
  });
  if(result.length > 0) {
    return result.sort().join('');
  } else {
    return false;
  }
}
//

module.exports = {
  createDreamTeam
};
