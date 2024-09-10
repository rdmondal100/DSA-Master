//**LIFO in Stack */

class Node {

  constructor(data) {
    this.data = data
    this.next = null
  }

}


class Stack {
  constructor(data) {
    const newNode = new Node(data)

    this.top = newNode
    this.length = 1
  }

  push(data) {
    const newNode = new Node(data)

    if (this.length === 0) {
      this.top = newNode
      this.length++
      return this
    }

    newNode.next = this.top
    this.top = newNode

    this.length++
    return this


  }

  pop() {

    if (this.length === 0) {
      return undefined
    }
    let temp = this.top
    this.top = this.top.next
    temp.next = null
    this.length--
    return temp
  }
}



let theStack = new Stack(0)

console.log(theStack.push(8))
console.log(theStack.push(99))
console.log(theStack.push(404))
console.log(theStack.pop())
console.log(theStack)