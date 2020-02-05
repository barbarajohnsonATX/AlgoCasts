// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {


    //Solution 1
    //return str === str.split('').reduce((reversed, ch) =>  ch + reversed, '') 

    //Solution 2
    //return str === str.split('').reverse().join('')

    //Solution 3
    return str.split('').every((ch, index) => {
        return ch === str[str.length - 1 - index]
    } )

}

module.exports = palindrome;
