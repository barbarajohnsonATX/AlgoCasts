// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let newArray = []
       
    for(let elem of str.split(' ') ) {
  
        newArray.push(elem.charAt(0).toUpperCase() + elem.slice(1))
         
     }
     
     return newArray.join(' ')

}

capitalize('hello short sentence')
module.exports = capitalize;
