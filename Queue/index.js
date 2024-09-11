//**FIFO IN QUEUE */

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor(data) {
    this.front = new Node(data)
    this.rare = this.front
    this.length = 1
  }


  enqueue(data) {
    let newNode = new Node(data)

    if (this.length === 0) {
      this.front = newNode
      this.rare = newNode
    }

    this.rare.next = newNode
    this.rare = newNode
    this.length++
    return this
  }

  dequeue() {
    if (this.length === 0) {
      return undefined
    }
    let temp = this.front

    if (this.length === 1) {
      this.front = null
      this.rare = null
      this.length--

      return temp
    }

    this.front = this.front.next
    temp.next = null
    this.length--
    return temp

  }
}


let myQueue = new Queue(11)

myQueue.enqueue(5)
myQueue.enqueue(89)
// console.log(myQueue)
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
console.log(myQueue)