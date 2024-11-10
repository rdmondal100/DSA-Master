
class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}


class DoublyLinkedList {

  constructor(data) {
    const newNode = new Node(data)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  push(data) {

    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return this
    }


    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode

    this.length++
    return this

  }


  pop() {
    const last = this.tail

    if (this.length === 0) {
      return undefined
    }
    if (this.length === 1) {

      this.head = null
      this.tail = null
      this.length--
      return last
    }

    this.tail = this.tail.prev
    this.tail.next = null
    last.prev = null
    this.length--
    return last
  }


  unshift(data) {
    const newNode = new Node(data)
    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
      this.length++
      return this
    }


    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode

    this.length++
    return this

  }


  shift() {

    if (!this.head) {
      return undefined
    }
    const first = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return first
    }
    this.head = this.head.next
    this.head.prev = null
    first.next = null

    this.length--

    return first


  }
}


const myDoubleLinkedList = new DoublyLinkedList(404)
// console.log(myDoubleLinkedList.push(69))
// console.log(myDoubleLinkedList)

// console.log(myDoubleLinkedList.push(101))
// console.log(myDoubleLinkedList.push(155))
// console.log(myDoubleLinkedList.push(131))
// console.log(myDoubleLinkedList.pop())
console.log(myDoubleLinkedList)
// console.log(myDoubleLinkedList.unshift(96))
console.log(myDoubleLinkedList.shift())
console.log(myDoubleLinkedList)