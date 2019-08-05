var firstUniqChar = function (s) {
    var map = new Map();
    s.split("").forEach((val) => {
        if (map.has(val)) map.set(val, false);
        else map.set(val, true);
    })

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i])) return i;
    }
    return -1
};