// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
// The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isUnivalueList = (head) => {
  // todo
  let val = head.val;
  let curr = head.next;
  while (curr){
    if (curr.val !== val) return false;
    curr = curr.next;
  }
  return true;
};


const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

console.log(isUnivalueList(a)); // true

const d = new Node(4);

a.next = b;
b.next = d;

// 7 -> 7 -> 4

console.log(isUnivalueList(a)); // false