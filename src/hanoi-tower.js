const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnSpeed) {
  const turns = Math.pow(2, diskNumber) - 1;
  const seconds = Math.floor((turns/turnSpeed) * 3600);
  return { turns, seconds };
};
