// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Solution 1
/* function steps(n) {
    let x = 1
    let str = ''

    while(x <= n) {
        str = '#'.repeat(x)

        if (x !== n ) {
            str = str + " ".repeat(n - x)
        }   

        console.log(str)
        x++
         
    }
     
} */

//Solution 2
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return 
    }

    if (n === stair.length) {
        console.log(stair)
        steps(n, row + 1)
        return 
    }

    if (stair.length <= row) {
        stair += "#"
    } else {
        stair += ' '
    }
    steps(n, row, stair)

}

 steps(5)
module.exports = steps;
