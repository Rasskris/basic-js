const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  const normalized = parseInt(sampleActivity, 10);
  if (!normalized || normalized > MODERN_ACTIVITY || normalized < 1) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY/normalized) / k;
  return Math.ceil(t);
};

