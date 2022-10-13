const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = false) {
    this.reverse = reverse;
    this.vigenereMap = this._createVigenereEncodingMap();
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw Error('Incorrect arguments!');
    }
    str = str.toLowerCase();
    key = key.toLowerCase();
    const stringWithKeyLetters = this._makeStringAnalogueWithKeyLetters(str, key);
    const encryptedLettersArr = stringWithKeyLetters.split('').map((letter, index) => {
      if (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122) {
        return letter;
      }
      return this.vigenereMap[letter.charCodeAt(0) - 97][str[index].charCodeAt(0) - 97].toUpperCase();
    });
    const encryptedString = this.reverse ? encryptedLettersArr.reverse().join('') : encryptedLettersArr.join('');
    return encryptedString;
  }
  decrypt(str, key) {
    if (!str || !key) {
      throw Error('Incorrect arguments!');
    }
    str = str.toLowerCase();
    key = key.toLowerCase();
    const stringWithKeyLetters = this._makeStringAnalogueWithKeyLetters(str, key);
    const decryptedLettersArr = stringWithKeyLetters.split('').map((letter, index) => {
      if (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122) {
        return letter;
      }

      const decryptedIndex = this.vigenereMap[letter.charCodeAt(0) - 97].indexOf(str[index]);
      return String.fromCharCode(decryptedIndex + 97).toUpperCase();
    });
    const decryptedString = this.reverse ? decryptedLettersArr.reverse.join('') : decryptedLettersArr.join('');
    return decryptedString;

  }
  _createVigenereEncodingMap() {
    const rows = [];
    for (let row = 0; row < 26; row++) {
      let alphabet = [];
      for (let letterCode = 0; letterCode < 26; letterCode++) {
        alphabet.push(String.fromCharCode(97 + letterCode));
      }
      alphabet = new Array(...alphabet.slice(row), ...alphabet.slice(0, row))
      rows.push(alphabet)
    }
    return rows;
  }
  _makeStringAnalogueWithKeyLetters(firstString, keyString) {
    let resultString = '';
    let offset = 0;
    for (let key = 0; key < firstString.length; key++) {
      let letter = firstString[key];
      if (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122) {
        resultString = resultString.concat(letter);
        offset++;
        continue;
      }
      if (letter !== ' ') {
        resultString = resultString.concat(keyString[(key - offset) % keyString.length]);
      } else {
        offset++
        resultString = resultString.concat(' ');
      }
    }
    return resultString;
  }
}

module.exports = {
  VigenereCipheringMachine
};
