// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document



// Creates a class instance to represent a node. 
// The node should have two properties, 'data' and 'next'. 
// Accept both of these as arguments to the 'Node' constructor, 
// then assign them to the instance as properties 'data' and 'next'. 
// If 'next' is not provided to the constructor, then default its value to be 'null'.
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
      }

}

// Create a class to represent a linked list. 
// When created, a linked list should have *no* head node associated with it. 
// The LinkedList instance will have one property, 'head', which is a reference to the first node of the linked list. 
// By default 'head' should be 'null'.
class LinkedList {
    constructor() {
        this.head = null;
    }

    //Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property. 
    //Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.
    insertFirst(data) {
        //pass existing head as newNode next
        const newNode = new Node(data, this.head);
        this.head = newNode;
        
    }

    //Returns the number of nodes in the linked list.
    size() {
        let count = 0;
        let currentNode = this.head 
        while (currentNode ) {
            count ++;
            currentNode = currentNode.next
        }
        return count ;

    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (!this.head) {
            return null;
        }

          
        let currentNode = this.head 
        while(currentNode.next ) {
            currentNode = currentNode.next 
        }

        return currentNode;
    }
 
    clear() {
        this.head = null;
    }

    removeFirst() {
        let firstNode = this.getFirst();
        this.head = firstNode.next;

    }

    removeLast() {
    
        if(!this.size() ) {
            return
        } else if (this.size() === 1) {
            this.head = null
            return 
        } else {
            let lastNode = this.getLast();
            let node = this.getFirst()
            
            while(node.next !== lastNode) {
                node = node.next 
            }
            node.next = null 
        }

    }

    insertLast(data) {
        const last = this.getLast();
    
        if (last) {
          last.next = new Node(data);
        } else {
          this.head = new Node(data);
        }
      }

    getAt(index) {

        let count = 0;
        let node = this.head;
        while (node) {
          if (count === index) {
            return node;
          }
    
          node = node.next;
          count++;

        }
        return null;

    }

    removeAt(index) {
        let count = 0;
        let node = this.head;
        let previous;
        let next;
        if(this.size() === 0) {
            return null
        }
 
        if(index === 0) {
            this.head = this.head.next
            return
        }

        while(node) {
            if(count === index - 1) {
                previous = node 

            } 

            if( count === index) {
                next = node.next 
            }
            count++;
            node = node.next
        }

        previous.next = next 


    }

    insertAt(data, index) {

        if (this.size() === null ) {
            this.head = new Node(data);
            return;
          }
      
          if (index === 0) {
            this.head = new Node(data, this.head);
            return;
          }
      
          const previous = this.getAt(index - 1) || this.getLast();
          const node = new Node(data, previous.next);
          previous.next = node;

    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
          fn(node, counter);
          node = node.next;
          counter++;
        }
    }


}

module.exports = { Node, LinkedList };
