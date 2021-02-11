const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((acc, arr) => {
    const cats = arr.filter((item) => item === '^^');
    acc += cats.length;
    return acc;
  }, 0);
};
