var solution = function (isBadVersion) {
  return function (n) {
    var start = 1;
    var end = n;
    while (start < end) {
      var mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) right = mid;
      else left = mid + 1;
    }
    return left;
  };
};