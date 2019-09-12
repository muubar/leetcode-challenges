function lengthOfLongestSubstring(str) {
  var letters = new Map();
  var max = 0;

  str.split("").forEach((letter, i) => {
    if (!letters.has(letter)) return letters.set(letter, [i]);
    letters.set(letter, [...letters.get(letter), i]);
  })

  letters.forEach((indices, letter) => {
    for (let first = 0; first < indices.length; first++) {
      const firstIdx = indices[first];
      const secondIdx = indices[first + 1] ? indices[first + 1] : str.length - 1
      const maxLength = maxLengthWithoutDuplicate(str.slice(firstIdx, secondIdx + 1))
      if (maxLength > max) max = maxLength;
    }
  })
  return max;

  function maxLengthWithoutDuplicate(str) {
    var letters = new Map();
    var count = 0;
    for (let i = 0; i < str.length; i++) {
      if (!letters.has(str[i])) {
        letters.set(str[i], true);
        count++;
        continue;
      }
      else return count;
    }
    return count;
  }
}

console.log(lengthOfLongestSubstring("cdd"));