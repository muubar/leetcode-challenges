var MinStack = function () {
  this.arr = [];
  this.min

  this.updateMin = function () {
    this.min = Math.min(...this.arr);
  }
};


MinStack.prototype.push = function (x) {
  if (!this.arr.length || x < this.min) this.min = x;
  this.arr.push(x);
};


MinStack.prototype.pop = function () {
  this.arr.pop();
  this.updateMin();
};


MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};


MinStack.prototype.getMin = function () {
  return this.min;
};