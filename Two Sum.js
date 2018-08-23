var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    const left = target - first;
    if (obj[left] !== undefined) {
      return [i, obj[left]];
    }
    else obj[first] = i;
  }
};


console.log(twoSum([3, 3], 6));