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

// if (val > this.root.value) {
//   while (current.right && val > current.value) {
//     current = current.right;
//   }
//   current.right = newNode;
//   return this
// }

// if (val < this.root.value) {
//   while (current.left && val < current.value) {
//     current = current.left;
//   }
//   current.left = newNode;
//   return this
// }





// ---- INFORMATION ABOUT DATADOG ---- //
// Three pilars of observability 
  // Infrastructure monitoring
  // Application performance monitoring 
  // Log Management



// 2. What about the product excites you?
// What excites me the most about the product is the many exceptional companies that use datadog to make data-driven decisions. I really like the idea of working for a company that has a product that many other companies utilize for their success. It makes me feel really proud of the work I do and just a sense of ownership and responsiblitly that my day to day job helps a lot of people.


// 3. Diversity and Inclusion
// One thing I did also notice was the hiring of bootcamp grads and I think that speaks a lot about the companies care for Diversity and Inclusion in hiring people from non - traditional backgrounds. 



//----- QUESTIONS ------//

// Why did you join Datadog? 
  // What makes you proud to work at Datadog

// What kind of projects would a person in my position be able to own from beginning to end?

// What is your favorite workplace tradition?

// How are goals communicated throughout the company?

// Does the company promote from within?
  // Where have other solution engineers gone to in the past?