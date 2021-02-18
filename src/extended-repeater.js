const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, params) {
  const repeatTimes = params.repeatTimes ?? 1;
  const separator = params.separator ?? '+';
  const addition = String(params.addition) !== 'undefined' ? String(params.addition) : '';
  const additionRepeatTimes = params.additionRepeatTimes || 1;
  const additionSeparator = params.additionSeparator || '|';
  const string = String(str);

  let result = '';

  for (let repeat = 0; repeat < repeatTimes; repeat += 1) {
    if (repeat > 0 && repeat < repeatTimes) {
      result = `${result}${separator}${string}`;
    } else {
      result = `${result}${string}`;
    }
  
    for (let addRepeat = 0; addRepeat < additionRepeatTimes; addRepeat += 1) {
      if (addRepeat > 0 && addRepeat < additionRepeatTimes) {
        result = `${result}${additionSeparator}${addition}`;
      } else {
      result = `${result}${addition}`;
      }
    }
  }
  return result;
};
