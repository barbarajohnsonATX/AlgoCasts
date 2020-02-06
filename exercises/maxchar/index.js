// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    //Solution 1
/*     let counts = {}
    for(let ch of str) {
        //if counts[ch] has not been defined yet, set to 1, otherwise increment
        counts[ch] = counts[ch] + 1 || 1
    }
   
    let maxValue = Math.max(...Object.values(counts))
    let maxChar = Object.keys(counts).filter(k => counts[k]==maxValue)
    debugger
     
    return maxChar.join('') */

    //Solution 2
    let counts = {}
    let maxValue = 0
    let maxChar = ''

    //iterate through string to build counts object
    for(let ch of str) {
        //if counts[ch] has not been defined yet, set to 1, otherwise increment
        counts[ch] = counts[ch] + 1 || 1
    }

    //iterate through object (in instead of of)
    for(let ch in counts) {
        if (counts[ch] > maxValue) {
            maxValue = counts[ch]
            maxChar = ch
        } 
    }
    return maxChar



}

maxChar("cccda")

module.exports = maxChar;
