class Node{

  constructor(data){
    this.data=data
    this.next = null
  }
}


class LinkedList{
  constructor(data){
    this.head= new Node(data)
    this.tail=this.head
    this.length=1
  }

  push(data){
    const newNode = new Node(data)
    if(!this.head){
      this.head =newNode
      this.tail = newNode
      this.length++
      return this
    }
    this.tail.next=newNode
    this.tail=newNode
    return this
  }


  reverse(){
    let temp = this.head
    this.head=this.tail
    this.tail = temp


    let next = temp
    let prev = null

    for(let i = 0;i<this.length;i++){
      next = temp.next 
      temp.next=prev
      prev= temp 
      temp =next

    }
  }
}


const myLinkedLIst = new LinkedList(1)


myLinkedLIst.push(2)
myLinkedLIst.push(3)
myLinkedLIst.push(4)
console.log(myLinkedLIst)
myLinkedLIst.reverse()
console.log(myLinkedLIst)