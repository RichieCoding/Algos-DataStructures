class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }


  find(value) {
    if (!this.root) return false;

    let current = this.root,
        found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current; 
  }

  BFS() {
    if (!this.root) return null
    let data = [],
        queue = [],
        node = this.root;
  
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data
  }

  DFSPreOrder() {
    let data = []
    let current = this.root

    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)

    return data
  }

  DFSPostOrder() {
    let data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }

    traverse(this.root)

    return data
  }

  DFSInOrder() {
    let data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)

    return data
  }

}


const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(11);
tree.insert(20);
tree.insert(1);
tree.insert(3);

console.log(tree.DFSPreOrder());
