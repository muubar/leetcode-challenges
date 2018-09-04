var isPalindrome = function (s) {
  for (let i = 0, j = 0; i < s.length - j;) {
    if (/[a-zA-Z0-9]/.test(s[i])) {
      if (/[a-zA-Z0-9]/.test(s[s.length - 1 - j])) {
        if (s[i].toLowerCase() === s[s.length - 1 - j].toLowerCase()) {
          i += 1;
          j += 1;
          continue;
        }
        else return false;
      }
      else {
        j += 1;
        continue;
      }
    }
    else {
      i += 1;
      continue;
    }
  };
  return true;
}