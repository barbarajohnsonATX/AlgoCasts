// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counters = [0]
    //'s' is just a character used as a pointer as a stopper
    const arr = [root, 's']
 
     while(arr.length > 1) {
        let node = arr.shift()
        if(node === 's') {
            //new counters 's' element refers to new level initialized to 0
            counters.push(0)
            arr.push(node)

        } else {
            //increment last counters element by 1
            counters[counters.length-1] += 1
            arr.push(...node.children)
        }

         
 

    }
    
    return counters



}

module.exports = levelWidth;
