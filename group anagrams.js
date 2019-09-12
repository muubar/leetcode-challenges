function groupAnagrams(strs) {
  var result = [];

  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === null) continue;
    var group = [];
    for (let j = i + 1; j < strs.length; j++) {
      if (strs[j] === null) continue;
      if (isAnagram(strs[i], strs[j])) {
        group.push(strs[j]);
        strs[j] = null;
      }
    }
    group.push(strs[i]);
    strs[i] = null;
    result.push(group);
  }
  return result;


  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    var visited = [];
    return str1.split("").every((letter) => {
      for (let i = 0; i < str2.length; i++) {
        if (str2[i] === letter) {
          if (visited.includes(i)) continue;
          visited.push(i);
          return true;
        }
      }
      return false;
    })
  }
}