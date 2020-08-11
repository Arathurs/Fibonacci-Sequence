// Iterative Top-Down Approach
const fib = function(n) {
    
    if(n < 1) {
        return n;
    }
    
    let first = 0,
        second = 1,
        result;
    for(let i = 2; i <= n; i++ ) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
}