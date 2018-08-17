var rotate = function (nums, k) {
  if (k > nums.length) k = k - nums.length;
  let arr2 = nums.slice(-k);
  let arr1 = nums.slice(0, -k);
  nums.length = 0;
  nums.push(...arr2.concat(arr1));
};