// Recursive Approach
const fib = function(n) {
    
    if(n < 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}