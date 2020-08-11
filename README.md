## Fibonacci Number

The ***Fibonacci numbers***, commonly denoted `F(n)` form a sequence, called the ***Fibonacci sequence***, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,

```
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
```

Given `N`, calculate `F(N)`.


#### Example 1:

```
Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
```

#### Example 2:

```
Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
```

#### Example 3:

```
Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

#### Note 0 ≤ N ≤ 30.


#### Approach 1

 `fib.js` is an iterative top-down approach which can be found in the root folder. It gets rid of all the space needed for most other approaches (like say,recursion) and instead uses the minimum space required. It achieves `O(1)O(1)` space complexity by only storing the value of the two previous numbers and updating them as we iterate to N.

##### Complexity Analysis of Approach 1

Time complexity : `O(N)`. Each value from `2` to `N` will be visited at least once. The time it takes to do this is directly proportionate to `N` where `N` is the Fibonacci Number we are looking to compute.

Space complexity : `O(1)`. This requires 1 unit of Space for the integer `N` and 3 units of Space to store the computed values (`result`, `first` and `second`) for every loop iteration. The amount of Space doesn't change so this is constant Space complexity.

#### Approach 2

`fibRecursive.js` is a recursive approach which can also be found  in the root folder.

##### Complexity Analysis of Approach 2

Time complexity : `O(2^N)`. This is the slowest way to solve the `Fibonacci Sequence` because it takes exponential time. The amount of operations needed, for each level of recursion, grows exponentially as the depth approaches `N`.

Space complexity : `O(N)`. We need space proportionate to `N` to account for the max size of the stack, in memory. This stack keeps track of the function calls to `fib(N)`. This has the potential to be bad in cases that there isn't enough physical memory to handle the increasingly growing stack, leading to a `StackOverflowError`.
