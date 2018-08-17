Solution:
```javascript
function maxProfit(prices) {
  function mapper(arr, acc) {
    let [first, ...rest] = arr;
    if (rest.length === 0) return acc;
    if (rest[0] > first) acc += rest[0] - first;
    return mapper(rest, acc);
  }
  return mapper(prices, 0);
}
```

Comment:

this solution is a [greedy algorithm](https://www.youtube.com/watch?v=3XaqEng_K5s), so it only compares the sell price of the next day 
to today's current buy price and confirms the purchase if it's a profitable one.
the `mapper` function is encapsulated so that we can include the profit accumulator as a parameter.

note that this solution won't pass the last test due to the fact that tail call optimization is not implemented in node or chrome as of today, using a standard loop is recommended

[accumulator's design recipes](https://courses.edx.org/courses/course-v1:UBCx+SPD1x+2T2015/77860a93562d40bda45e452ea064998b/#Accumulators)
