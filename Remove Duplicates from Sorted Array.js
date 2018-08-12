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


/*
to be honest this isn't something that i would ever do in a real project, i didn't spend weeks studying functional programming
so that i wind up mutating arguments in-place   
*/