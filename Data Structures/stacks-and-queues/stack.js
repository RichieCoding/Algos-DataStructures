class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let current = this.first;
      this.first = newNode;
      this.first.next = current;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return current.val;
  }
}

const stack = new Stack();

stack.push("google");
stack.push("youtube");
stack.push("amazon");

console.log(stack.pop());
console.log(stack.pop())
console.log(stack.pop())

console.log(stack)
