// UNDIRECTED GRAPH
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // We add a vertex before we can add an edge
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        city => city !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        city => city !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(adjVertex, vertex)
    }
    delete this.adjacencyList[vertex]
  }
}

let g = new Graph();

g.addVertex('New York');
g.addVertex('Los Angeles');
g.addVertex('San Diego');

g.addEdge('New York', 'Los Angeles');
g.addEdge('New York', 'San Diego');
// g.addEdge('Los Angeles', 'San Diego');

// g.removeEdge("New York", "Los Angeles")

g.removeVertex("New York")

console.log(g);
