

function dfs (graph, node, visited = new Set(), result=[]){

    if(visited.has(node)) return 

    visited.add(node)
    result.push(node)

    for(let neighbor of graph[node]){
        if(!visited.has(neighbor)){
            dfs(graph, neighbor,visited, result)
        }
    }

    return result

}


function dfsIter(graph, start){
    const stack = [start]
    const visited = new Set()
    const result = []

    while (stack.length > 0 ){
        const node = stack.pop();

        if(!visited.has(node)){
            visited.add(node)
            result.push(node)


            for(let i = graph[node].length - 1; i >=0; i--){
                const neighbor = graph[node][i]

                if(!visited.has(neighbor)){
                    stack.push(neighbor)
                }
            }
        }
    }

    return result
}

const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

console.log(dfsIter(graph, 'A'));  

// Output: ['A', 'B', 'D', 'E', 'F', 'C'] (could vary)
