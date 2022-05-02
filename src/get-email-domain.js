const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let domain = email.match(/(@)[^\.]+[\.][a-z]+/gm)[0];
  return domain.slice(1);;
}
//

module.exports = {
  getEmailDomain
};
