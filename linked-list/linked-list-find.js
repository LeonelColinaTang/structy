// Write a function, linkedListFind, that takes in the head of a linked list and a target value.
// The function should return a boolean indicating whether or not the linked list contains the target.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
    
    //Solution with recursion
    // if (head === null) return false;
    // if (head.val === target) return true;
    // return linkedListFind(head.next, target)

    while (head !== null) {
        if (head.val === target) return true;
        head = head.next;
    }
    return false
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d
// console.log(linkedListFind(a, "d")); // true

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d
// console.log(linkedListFind(a, "q")); // false

// const node1 = new Node("jason");
// const node2 = new Node("leneli");
// node1.next = node2;
// // jason -> leneli
// console.log(linkedListFind(node1, "jason")); // true

// const node3 = new Node(42);
// // 42
// console.log(linkedListFind(node3, 42)); // true

// const node4 = new Node(42);
// // 42
// console.log(linkedListFind(node4, 100)); // true
