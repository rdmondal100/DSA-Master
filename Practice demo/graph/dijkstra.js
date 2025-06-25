

function dijkstra(graph, start){

    const distance = {}
    const visited = new Set ()
    const pq = []


    //initialize distance
    for(let node in graph){
        distance[node] = Infinity
    }
    distance[start] = 0

    pq.push({node:start, dist: 0})

    while(pq.length > 0){
        pq.sort((a,b)=>a.dist - b.dist)
        const {node: current} = pq.shift()

        if(visited.has(current)){
            continue
        }

        visited.add(current)


        for(let neighbor of graph[current]){
            const {node:next, weight} = neighbor

            const newDist = distance[current] + weight;

            if(newDist < distance[next]){
                distance[next] = newDist;
                pq.push({node: next, dist: newDist})
            }
        }
    }

    return distance
}





const graph = {
  A: [ { node: "B", weight: 4 }, { node: "C", weight: 2 } ],
  B: [ { node: "C", weight: 5 }, { node: "D", weight: 10 } ],
  C: [ { node: "E", weight: 3 } ],
  D: [ { node: "F", weight: 11 } ],
  E: [ { node: "D", weight: 4 } ],
  F: []
};

console.log(dijkstra(graph, 'A'));
