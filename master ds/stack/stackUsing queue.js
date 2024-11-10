
class Node{
  constructor(val){
      this.val = val
      this.next=null
  }
}

class myQueue{
  constructor(val){
      this.head = null
      this.tail = null
      this.size = 0
  }


  enqueue(val){
      const newNode = new Node(val)

      if(!this.head){
          this.head = newNode
          this.tail = newNode
      }else{
          this.tail.next = newNode
          this.tail = newNode
      }


      this.size++   

  }

  dequeue(){

      if(!this.head)return null
      const node = this.head
      this.head = this.head.next
      node.next = null
      this.size--
      return node.val
  }


  size(){
      return this.size
  }

  isEmpty(){
      return this.size===0
  }

}


class MyStack{
  constructor(){
      this.queue = new myQueue()
  }

  push(val){
      let rotate = this.queue.size
      this.queue.enqueue(val)

      while(rotate){
          this.queue.enqueue(this.queue.dequeue())
          rotate --
      }
  }

  pop(){
      return this.queue.dequeue()
  }

  top(){
      return this.queue.head.val
  }

  empty(){
      return this.queue.isEmpty()
  }
}