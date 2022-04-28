const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let appearances = domains.map(appearance => appearance.split('.').reverse());
  let results = {};
  let unoquesAdresses = new Set();

  let reverseDomains = domains.map(domain => {
    return '.' + domain.split('.').reverse().join('.');
  });

  appearances.forEach(appearance => appearance.reduce((address, domain) => {
    unoquesAdresses.add(address + '.' + domain);
    return address + '.' + domain;
  }, ''));

  unoquesAdresses.forEach(address => {
    reverseDomains.forEach(domain => {
      if (results[address]) {
        domain.includes(address) ? results[address]++ : '';
      } else {
        domain.includes(address) ? results[address] = 1 : '';
      }
    })
  });
  return results;
}

module.exports = {
  getDNSStats
};
