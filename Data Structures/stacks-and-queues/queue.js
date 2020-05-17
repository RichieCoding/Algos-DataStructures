class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;
    let current = this.first;
    if (this.first === this.last) {
      this.last = null
    }
    this.first = current.next;
    this.size--
    return current.val;
  }
}

const queue = new Queue();

queue.enqueue("Richard");
queue.enqueue("Peter");
queue.enqueue("Sam");

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue)



