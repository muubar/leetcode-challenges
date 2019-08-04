var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length;

  for (let i = 0; i < nums.length;) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
    else i++
  }
  return nums.length;
};