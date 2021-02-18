const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(msg, key) {
    if(!msg || !key) {
      throw new Error('Both parameters are mandatory.')
    }
    const normalizedMsg = msg.toUpperCase();
    const normalizedKey = key.toUpperCase();
    let result = '';

    let keyIndex = 0;
    for (const charOfMsg of normalizedMsg) {
      const charOfKey = normalizedKey[keyIndex];
      const msgIndexAtAlp = this.alp.indexOf(charOfMsg);
      const keyIndexAtAlp = this.alp.indexOf(charOfKey);
      if (msgIndexAtAlp !== -1) {
        const index = (msgIndexAtAlp + keyIndexAtAlp) % this.alp.length;
        result = `${result}${this.alp[index]}`;
        keyIndex = ++keyIndex % key.length;
      } else {
        result = `${result}${charOfMsg}`;
      }
    }
    return this.mode ? result : result.split('').reverse().join('');
  }

  decrypt(msg, key) {
    if(!msg || !key) {
      throw new Error('Both parameters are mandatory.')
    }
    const normalizedMsg = msg.toUpperCase();
    const normalizedKey = key.toUpperCase();
    let result = '';

    let keyIndex = 0;
    for (const charOfMsg of normalizedMsg) {
      const charOfKey = normalizedKey[keyIndex];
      const msgIndexAtAlp = this.alp.indexOf(charOfMsg);
      const keyIndexAtAlp = this.alp.indexOf(charOfKey);
      if (msgIndexAtAlp !== -1) {
        const index = (msgIndexAtAlp - keyIndexAtAlp) < 0 ?
        (msgIndexAtAlp - keyIndexAtAlp) + this.alp.length :
        (msgIndexAtAlp - keyIndexAtAlp);

        result = `${result}${this.alp[index]}`;
        keyIndex = ++keyIndex % key.length;
      } else {
        result = `${result}${charOfMsg}`;
      }
    }
    return this.mode ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
