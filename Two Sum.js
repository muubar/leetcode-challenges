var twoSum = function (nums, target) {
  var map = new Map();
  nums.forEach((val, i) => map.set(val, i));

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i]) && i !== map.get(target - nums[i])) return [i, map.get(target - nums[i])];
  }
};



