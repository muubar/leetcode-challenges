var myAtoi = function (str) {
  var result = ""
  var i = 0;
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(-2, 31);
  var str = str.trim();
  if (str.length === 0) return 0;
  if (str[0] === "+" || str[0] === "-") { result = result.concat(str[0]); i++; }
  if (/[^0-9+-]/.test(str[0])) return 0

  for (; i < str.length; i++) {
    if (/[^0-9]/.test(str[i])) {
      if (Number(result) > INT_MAX) return INT_MAX
      if (Number(result) < INT_MIN) return INT_MIN;
      if (Number.isNaN(Number(result))) return 0
      return Number(result)
    }
    result = result.concat(str[i]);
  }
  if (Number(result) > INT_MAX) return INT_MAX
  if (Number(result) < INT_MIN) return INT_MIN;
  if (Number.isNaN(Number(result))) return 0
  return Number(result)
};