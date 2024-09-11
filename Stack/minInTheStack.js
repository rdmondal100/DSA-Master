
class Node{
  constructor(data){
    this.data=data
    this.next = null
  }
}


class Stack{

  constructor(data){
    this.top =  new Node(data)
    this.length=1
  }

  push(data){
    let newNode = new Node(data)
    if(this.length==0){

      this.top=newNode
      this.length++
      return this
    }
    newNode.next = this.top
    this.top =newNode
    this.length++
    return this
  }

  min(){
    let min = this.top.data
    let temp = this.top.next
    while(temp){
      if(min>temp.data){
        min =temp.data
      }

      temp =temp.next
    }

    return min
  }
}



const myStack = new Stack(20)

myStack.push(13)
myStack.push(20)
myStack.push(300)
console.log(myStack.min())
console.log(myStack)