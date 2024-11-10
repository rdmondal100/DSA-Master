class Node {
  constructor(value) {
    this.data = value;
    this.next = null
  }
}


class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
      this.length++
      return
    }
    this.tail.next = newNode
    this.tail = newNode;
    this.length++
  }


  pop() {
    if (!this.head) {

      return undefined
    }


    let temp = this.head
    let prev = this.head

    while (temp.next) {
      prev = temp
      temp = prev.next
    }
    if(this.head.data === this.tail.data){
      this.head = null
      this.tail = null
    }else{
      this.tail = prev
      this.tail.next = null
    }


    this.length--


    return temp

  }

  unshif(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }else{
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }


  shift() {

    if (!this.head) return null

    let temp = this.head

    this.head = this.head.next

    temp.next = null

    this.length--

    if (this.length === 0) {
      this.tail = null
    }
    return temp
  }

  getFirstElement() {
    return this.head
  }

  // getLastElement(){
  //   return this.tail
  // }

  // another method
  getLastElement() {
    if (!this.head) return null

    let temp = this.head

    while (temp) {
      if (!temp.next) {
        return temp
      } else {
        temp = temp.next
      }
    }
  }

  get(index) {

    if(index<0 || index >= this.length)return false

    let target = this.head
    for (let i = 0; i <= index; i++) {
      if (i === index) return target
      else {
        target = target.next
        if (!target) break
      }
    }
    return null
  }

  set(index, data) {
    let target = this.get(index)
    // console.log(target)
    if (target) {
      target.data = data
      return true
    }
    return false
  }

  // set(index, data) {

  //   let target = this.head
  //   for (let i = 0; i <= index; i++) {
  //     if (i === index) {
  //       target.data = data
  //       return true
  //     } else {
  //       target = target.next
  //       if (!target) {
  //         return false
  //       }
  //     }
  //   }


  // }


  insert(index, data) {

    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      return this.unshif(data)
    }

    if (index === this.length) {
      console.log("last node pushed")
      return this.push(data)
    }

    let newNode = new Node(data)

    const previous = this.get(index - 1)
    newNode.next = previous.next
    previous.next = newNode
    this.length++

    return true



  }

  size() {
    let counter = 0;
    let temp = this.head

    while (temp) {

      counter++
      temp = temp.next
    }
    return counter
  }

  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }


}


const myLinkedLIst = new LinkedList(50)
// console.log(myLinkedLIst)
// console.log(myLinkedLIst.push(33))
// console.log(myLinkedLIst)
// console.log(myLinkedLIst.push(333))
// console.log(myLinkedLIst)
// console.log(myLinkedLIst.push(500))
console.log(myLinkedLIst)
console.log(myLinkedLIst.pop())
console.log(myLinkedLIst)
console.log(myLinkedLIst.push(444)) 
// console.log(myLinkedLIst.unshif(15))
// console.log(myLinkedLIst.shift())
// console.log(myLinkedLIst.getFirstElement())
// console.log(myLinkedLIst.getLastElement())
// console.log(myLinkedLIst.get(3))
// console.log(myLinkedLIst.insert(2, 69))


// console.log(myLinkedLIst.clear())
// console.log(myLinkedLIst.size())
// console.log(myLinkedLIst.get(3))

console.log(myLinkedLIst)

