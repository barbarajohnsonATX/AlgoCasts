// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

        add(data) {
            this.children.push(new Node(data));
        }



        remove(data) {
           this.children = this.children.filter(node => node.data !== data);
        }

}

class Tree {
    constructor() {
        this.root = null;
    }

    //Breadth first
    traverseBF(fn) {
        //start with array containing root node
        let arr = [this.root]

        //while array is not empty, take first node out, 
        //push its children end of the array, and
        //call function on the removed node
        while(arr.length) {
            let node = arr.shift()
            arr.push(...node.children)
            fn(node)
        }
    }


    //Depth first
    traverseDF(fn) {
        //start with array with root node
        let arr = [this.root]

        //while array is not empty, take first node out,
        //push children to start of array, and
        //call function on the removed node 
        while(arr.length) {
            let node = arr.shift();
            arr.unshift(...node.children)
            fn(node)
        }
    
    }

}

module.exports = { Tree, Node };
