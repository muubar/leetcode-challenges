var plusOne = function (digits) {
  if (digits[0] === 0) return [1];
  function start(arr, acc = 1) {
    if (acc > arr.length) return [1].concat(Array(arr.length).fill(0));
    if (arr[arr.length - acc] !== 9) {
      if (arr.length === acc) return [arr[0] + 1].concat(Array(arr.length - 1).fill(0));
      return arr.slice(0, arr.length - acc).concat([arr[arr.length - acc] + 1]).concat(Array(acc - 1).fill(0));
    }
    return start(digits, acc += 1)
  }
  return start(digits);
};
