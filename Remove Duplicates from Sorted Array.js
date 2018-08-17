var removeDuplicates = function (nums) {
  if (nums.length === 0 || typeof (nums) !== "object") return 0;
  for (var i = 0; i < nums.length;) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i = 0;
    }
    else { i += 1 }
  }
  return nums.length;
};
