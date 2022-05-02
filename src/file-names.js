const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let uniqueNames = new Set();
  names.forEach(item => uniqueNames.add(item));
  uniqueNames.forEach(value => {
    let current = 0;
    for(let key = 0; key < names.length; key++) {
      if(value === names[key]) {
        if(current === 0) {
          current++
        } else {
          names[key] = names[key] + `(${current})`
          current++;
        }
      }
    }
  })
  return names;
}

module.exports = {
  renameFiles
};
