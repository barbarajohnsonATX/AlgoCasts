// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = []
    }
    
    push(record) {
        this.data.push(record)
    }

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    
}

let s = new Stack()
s.push(1);
s.push(2);
s.push(3);
console.log(s.peek())
console.log(s.pop())
console.log(s.peek())
console.log(s.pop())
console.log(s.peek())
console.log(s.pop())
// expect(s.peek()).toEqual(3);
// expect(s.pop()).toEqual(3);
// expect(s.peek()).toEqual(2);
// expect(s.pop()).toEqual(2);
// expect(s.peek()).toEqual(1);
// expect(s.pop()).toEqual(1);

module.exports = Stack;
