// You are given a graph and a number x as input. Your task is to print the DFS traversal nodes of the input graph starting from node x. Complete the following function in order to give the required output.

class Graph {
    constructor(v) {
      this.V = v;
      this.adj = new Array(v);
      for (let i = 0; i < v; i++) this.adj[i] = [];
    }
  
    addEdge(v, w) {
      this.adj[v].push(w);
    }
  
    DFSUtil(v, visited) {
      visited[v] = true;
      console.log(v + " ");
  
      for (let i of this.adj[v].values()) {
        let n = i;
        if (!visited[n]) this.DFSUtil(n, visited);
      }
    }
  
    DFS(v) {
      let visited = new Array(this.V);
      for (let i = 0; i < this.V; i++) visited[i] = false;
  
      this.DFSUtil(v, visited);
    }
  }
  
  // Driver Code
  g = new Graph(4);
  
  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(1, 2);
  g.addEdge(2, 0);
  g.addEdge(2, 3);
  g.addEdge(3, 3);
  
  console.log(
    "Following is Depth First Traversal " + "(starting from vertex 2)<br>"
  );
  
  g.DFS(2);