Solution 2:
```javascript
var singleNumber = function (nums) {
  return 2 * sum(new Set(nums)) - sum(nums);

  function sum(set) {
    let acc = 0;
    for (let item in set) acc += item;
    return acc;
  }
}

```

Comment:

this solution is based on the fact that if there were no duplicates then the sum of set(nums) multiplied by 2 would be equal to sum(nums)
because we know for sure that each element exists twice, but since there is a single element that only exists once then it would be equal
to the difference between the two sums



Solution 2:
```javascript
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b);
}

```

Comment:

this solution is based on the three properties of [XOR bitwise operator](https://en.wikipedia.org/wiki/Exclusive_or):
1. its a commutative operation (a xor b = b xor a)
2. something xor itself is 0 (a xor a = 0)
3. (0 xor a = a)

this ensures that duplicates would cancel out each other even if they weren't successive and we would be left with the single number.

[solutions walkthrough](https://www.youtube.com/watch?v=-_6l_ijmcgs)