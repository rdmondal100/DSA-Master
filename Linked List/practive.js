
class Node {
  constructor(value) {
    this.data = value;
    this.next = null
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  push(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
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
    this.tail = prev
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp

  }

  unshif(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    newNode.next = this.head
    this.head = newNode
    this.length++

    return this

  }

  shift() {
    if (!this.head) {
      return null
    }

    let firstNode = this.head
    this.head = this.head.next
    firstNode.next = null
    this.length--
    if (this.length == 0) {
      this.tail = null
    }
    return firstNode

  }


  getFirstElement() {
    return this.head
  }

  getLastElement() {
    return this.tail
  }


  get(index) {

    if(index>this.length || index<0)return false

    let target = this.head

    for (let i = 0; i <= index; i++) {
      if (index === i) {
        return target
      } else {
        target = target.next
      }
    }

  }

  set(index,data){

      let target = this.get(index)

      if(target){
        target.data = data
        return true
      }
      return false
    
  }

  insert(index, data){
    if(index<0 || index>this.length){
      return false
    }
    if(index ===0){
      this.unshif(data)
      return true
    }
    if(index ===this.length){
      this.push(data)
      return true
    }
    const newNode = new Node(data)
    let pre = this.get(index-1)
    newNode.next = pre.next
    pre.next = newNode
    this.length++
    return true

  }

  // insert(index, data) {

  //   if(index<0 || index > this.length) return false
  //   const newNode = new Node(data)
  //   if(index===0){
  //     let temp = this.head
  //     this.head =newNode
  //     newNode.next=temp
  //     this.length++
  //     return true
  //   }
  //   else if(index ===this.length-1){
  //     let temp = this.tail
  //     this.tail = newNode
  //     temp.next=this.tail
  //     this.length++
  //     return true
  //   }else{

  //     let prev=this.get(index-1)
  //     newNode.next=prev.next
  //     prev.next = newNode
      
  //     this.length++
  //     return true
  //   }

  // }

  size(){
    return this.length
  }

  clear(){
    this.head=null 
    this.tail =null
    this.length=0
  }



}
const myLinkedLIst = new LinkedList(44)
// console.log(myLinkedLIst)
myLinkedLIst.push(55)
myLinkedLIst.push(123)
myLinkedLIst.push(999)
myLinkedLIst.push(101)
// console.log(myLinkedLIst.pop())
// console.log(myLinkedLIst.pop())
// console.log(myLinkedLIst.unshif(404))

console.log(myLinkedLIst)
// console.log(myLinkedLIst.shift())
// console.log(myLinkedLIst.shift())
// console.log(myLinkedLIst.shift())
// console.log(myLinkedLIst.shift())
console.log(myLinkedLIst.insert(3,404))
console.log(myLinkedLIst.size())
console.log(myLinkedLIst.clear())
console.log(myLinkedLIst)

