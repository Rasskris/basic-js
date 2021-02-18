const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain = this.chain.concat(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || position > this.chain.length) {
      this.chain = [];
      throw new Error(`Position ${position} is invalid`);
    }
    this.chain = this.chain.filter((item, index) => index + 1 !== position);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.slice().reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.slice().join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
