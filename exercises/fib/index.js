// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Solution 1
/* function fib(n) {
    let series = []
    for(let i = 0; i <= n; i++) {
        (i <= 1 ? series.push(i) : series.push(series[i - 1] + series[i - 2]))
        
    }
  
    return series[n]

} */

//Solution 2
function fib(n) {
  if (n < 2) {

    return n;
  }
   

  return fib(n - 1) + fib(n - 2)
}

console.log("Answer", fib(3));

module.exports = fib;
