var isAnagram = function (s, t) {
  var map = {}
  if (s.length !== t.length) return false;

  s.split("").map((val, idx) => {
    const char = s.charCodeAt(idx);
    if (!map[char]) map[char] = { count: 1 };
    else map[char].count += 1;
  })
  return !t.split("").some((val, idx) => {
    const char = t.charCodeAt(idx);
    if (!map[char]) return true;
    if (map[char].count > 0) {
      map[char].count -= 1;
      return false;
    };
    return true;
  })
};

console.log(isAnagram("aacc", "ccac"));