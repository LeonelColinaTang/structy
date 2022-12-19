// Write a function, linkedListValues, that takes in the head of a linked list as an argument.
// The function should return an array containing all values of the nodes in the linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {

    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;



    //Recursive Solution
    // if (head === null) return [];

    // console.log(head.val)
    // let arr = [];
    // arr.push(head.val)
    // return arr.concat(linkedListValues(head.next))


};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]


const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

console.log(linkedListValues(x)); // -> [ 'x', 'y' ]

const q = new Node("q");

// q

console.log(linkedListValues(q)); // -> [ 'q' ]

console.log(linkedListValues(null)); // -> []