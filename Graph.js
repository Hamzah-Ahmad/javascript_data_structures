class Graph {
    constructor() {
        this.adjacencyList =  {}
    }

    //Adding a new vertex. If vertex already exists, no change is made. Different implementations can handle such a scenario differnetly
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    //Adding an edge involves accepting two vertices. The function finds in the adjacency list, the key of vertex 1 and push vertex 2 in teh array. Similar case for vertex 2

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            throw new Error("One or both of the vertices provided were not found in the graph")
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    //To remove an edge, we write a function that accepts two vertices. The function should reassign the key of vertex1 to be an array that contains everything it contained before minus vertex2. then we do the same for the key of vertex2
    removeEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            throw new Error("One or both of the vertices provided were not found in the graph")
        }
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            throw new Error("Vertex provided was not found in the graph")
        }
        //Looping over the elements in the array value of the vertex provided. 
        while(this.adjacencyList[vertex].length){
            //removing each element in the value (i.e. the array) of the key (i.e. the vertex argument provded)
            const adjacentVertex = this.adjacencyList[vertex].pop(); 

            //for each element in the array, we also remove the vertex from that element's array
            this.removeEdge(vertex, adjacentVertex);
        }

        //finally, remove the key of the vertex from the adjacency list
        delete this.adjacencyList[vertex];

    }
}


let g = new Graph();
g.addVertex('Tokyo')
g.addVertex('San Francisco')
g.addVertex('Karachi')
g.addVertex('London')

g.addEdge('Tokyo', 'San Francisco')
g.addEdge('Tokyo', 'Karachi')
g.addEdge('London', 'Karachi')
g.addEdge('London', 'San Francisco')

// g.removeEdge('Tokyo', 'Karachi')
g.removeVertex('Tokyo')

console.log(g)