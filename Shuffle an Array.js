var Solution = function (nums) {
  this.arr = nums;
};

Solution.prototype.reset = function () {
  return this.arr;
};


Solution.prototype.shuffle = function () {
  var used = [];
  var result = [];
  while (used.length < this.arr.length) {
    const random = Math.floor(Math.random() * this.arr.length);
    if (used.includes(random)) continue;
    else if (this.arr[random] !== undefined) {
      used.push(random);
      result.push(this.arr[random]);
    }
  }
  return result;
};