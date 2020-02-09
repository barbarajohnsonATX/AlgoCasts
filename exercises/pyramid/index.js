// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#' total length = n * 2 - 1 =1
//   pyramid(2)
//       ' # '
//       '###' total length = 2*2-1 = 3
//   pyramid(3)
//       '  #  ' Math.floor(3/2) + 1 -  row = 1 + 1 -  0 = 2
//       ' ### ' Math.floor(3/2) + 1 - 1 = 1
//       '#####' total length 2*3-5 = 5; 1 + 1 -2 = 0
//   pyramid(5)
//       '    #    ' ;# in Math.floor(9/2) - 0 = 4
//       '   ###   ' ;# in Math.floor(9/2) - 1 = 3
//       '  #####  ' ;# in Math.floor(9/2) - 2 = 2
//       ' ####### ' ;# in Math.floor(9/2) - 3 = 1
//       '#########' total length = n * 2 - 1 = 9

function pyramid(n) {
    let totalLength = n * 2 - 1
    let midPoint = Math.floor(totalLength/2)

    for(let row = 0; row < n; row++) {
        let stair = ''
        for(let column = 0; column < totalLength; column++) {
            if (column < (midPoint - row) || column > (midPoint + row) ) {
                stair += ' '
            } else {
                stair += '#'
            }
         }
         console.log(stair)
         
      
    }

}

pyramid(3)

module.exports = pyramid;
