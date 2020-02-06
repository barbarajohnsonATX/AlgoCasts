// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function multipleOf(x, y) {
    if (x % y === 0) {
        return true
    }
    return false
}

function fizzBuzz(n) {
    for(var i = 1; i <= n; i++) {
        if (multipleOf(i, 15)) {
            console.log('fizzbuzz')
        } else if (multipleOf(i, 3)) {
            console.log('fizz')
        } else if (multipleOf(i, 5)) {
            console.log('buzz')
        } else {
            console.log(i)
        }

        
    } 
}




module.exports = fizzBuzz;
