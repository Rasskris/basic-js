const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`This ${arr} is not Array`);

  }

  let newArr = [];
  const lastIndex = arr.length - 1;
  let target;

  const mapping = {
    '--discard-next': (index) => {
      if (index === lastIndex) {
        return { elem: null, step: 1 };
      }
      target = index + 1;
      return { elem: null, step: 2 };
    },
    '--discard-prev': (index) => {
      if (index === 0 || index - 1 === target) {
        return { elem: null, step: 1 };
      }
      newArr.pop();
      return { elem: null, step: 1 };
    },
    '--double-next': (index) => {
      if (index === lastIndex) {
        return { elem: null, step: 1 };
      }
      return { elem: arr[index + 1], step: 1 };
    },
    '--double-prev': (index) => {
      if (index === 0 || index - 1 === target) {
        return { elem: null, step: 1 };
      }
      return { elem: arr[index - 1], step: 1 };
    },
  };

  for (let i = 0; i <= lastIndex;) {
    const item = arr[i];
    const condition = mapping[item];
    const { elem, step } = condition ? condition(i) : { elem: item, step: 1 };
    newArr = elem !== null ? [...newArr, elem] : newArr;
    i += step;
  }

  return newArr;
};