import { Node } from "./Node.js";
export class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size += 1;
    }
  }

  pop() {
    if (this.isEmpty()) return null;
    const valueRemoved = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return valueRemoved;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

// const q = new Queue();
// q.push(1);
// q.push(2);
// q.push(3);
// console.log(q);
// console.log("Pop ", q.pop());
// console.log("Pop ", q.pop());
// console.log("Pop ", q.pop());

// console.log(q);
