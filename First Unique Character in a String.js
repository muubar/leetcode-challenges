var firstUniqChar = function (s) {
    let result = -1;
    s.split("").some((char, idx) => {
        let first = s.indexOf(char);
        let last = s.lastIndexOf(char)
        if (first === last) {
            result = idx;
            return true;
        }
        return false;
    })
    return result;
};