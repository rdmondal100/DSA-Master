
class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class Queue{
    constructor(data){
        const newNode = new Node(data)
        this.front = newNode
        this.rear = this.front
        this.length = 1
    }

    enqueue(data){
        const newNode = new Node(data)

        if(this.length === 0){
            this.front = newNode
            this.rear = newNode
            this.length++
            return this
        }

         this.rear.next = newNode
        this.rear = newNode
        this.length++

        return this
    }

    dequeue(){
        if(!this.length){
            return undefined
        }

        const frontNode = this.front
 
        if(this.length === 1){
            this.front = null;
            this.rear = null
            this.length--
            return frontNode
        }
         this.front = this.front.next 
        frontNode.next = null
        this.length--
        return frontNode
    }

  get size(){
    return this.length
  }

}
 




// bfs
function bfs ( graph, start ){
    const visited = new Set()
    const queue = new Queue(start)
    const result = []
    visited.add(start);    

    while ( queue.size > 0){
        const node = queue.dequeue();

            result.push(node.data)

            for(let neighbor of graph[node.data]){
                if(!visited.has(neighbor)){
                    queue.enqueue(neighbor)
                    visited.add(neighbor);
                }
            }

        
    }

    return result
}

const graph3 = {
  A: ['B'],
  B: ['C'],
  C: ['A'] // cycle back to A
};
console.log(bfs(graph3, 'A'));
// Expected: [ 'A', 'B', 'C' ] — should not revisit A
