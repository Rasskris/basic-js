const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  }
  const firstLetters = members.reduce((acc, member) => {
    if (typeof member === 'string') {
      const processed = (member.trim())[0].toUpperCase();
      return [...acc, processed];
    }
    return acc;
  }, []);

  return firstLetters.sort().join('');
};

