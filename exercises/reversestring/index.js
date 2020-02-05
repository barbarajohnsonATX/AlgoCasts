// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //Solution 1
    //split string into an array, reverse, then join back to string
    // return str.split('').reverse().join('')

    //Solution 2
/*  let reversed = ""
    for(let ch of str) {
        reversed = ch + reversed 
     }
    return reversed
*/

    //Solution 3
    // 1st arg is the accumulator (reversed string) with initial value of '', 
    // 2nd is the ch out of array
    return str.split('').reduce((reversed, ch) =>  ch + reversed, '') 

    //Solution 4
/*      let reversed = ""
     let i = str.length-1
     while(i >= 0) {
         reversed = reversed + str[i]
         i = i-1
     }
     return reversed */

}

 
module.exports = reverse;
