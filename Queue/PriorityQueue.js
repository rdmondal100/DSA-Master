


class Node{

  constructor(data,priority){
    this.data = data
    this.next =null
    this.priority = priority
  }
}


class PrQueue{

  constructor(){
    this.front = null
    this.rare = null
    this.length = 0
  }


  enqueue(data,priority){
    const newNode = new Node(data,priority)

    if(!this.front || this.front.priority>priority){
      newNode.next = this.front
      this.front = newNode
        if(!this.rare){
          this.rare = newNode
      }
    }
    else{

      
    let current = this.front
    while(current.next && current.next.priority<=priority){
      current = current.next
    }

    newNode.next = current.next
    current.next = newNode


    if(!newNode.next){
      console.log("rare is adding")
      this.rare = newNode
    }

    }
    this.length++
    return this
    
  }


  dequeue(){
    if(!this.front){
      return null
    }

    let temp = this.front
    this.front = this.front.next
    temp.next = null

    if(!this.front){
      this.rare = null
    }

    this.length --
    return temp
  }


}


const pr = new PrQueue()


console.log(pr)

pr.enqueue(44,5)
pr.enqueue(33,2)
pr.enqueue(50,20)
pr.enqueue(69,1)

console.log(pr)
console.log(pr.dequeue())
console.log(pr)
console.log(pr.dequeue())
console.log(pr)
console.log(pr.dequeue())
console.log(pr)
console.log(pr.dequeue())
console.log(pr)
console.log(pr.dequeue())