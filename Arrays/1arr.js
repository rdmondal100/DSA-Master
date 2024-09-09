
class MyArray{


  constructor (){
    this.length = 0;
    this.data ={}
  }

  push(item){

    this.data[this.length] =item;
    this.length++
    return this.length
  }

  get(index){
    return this.data[index]
  }


  pop(){
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--
    return lastItem
  }

  shift(){

    const firstItem = this.data[0]

    for (let index = 0; index < this.length-1; index++) {
        this.data[index] = this.data[index+1]
    }
    delete this.data[this.length-1]
    this.length--
    return firstItem

  }



  deleteByIndex(index){
      const theSelectedItem = this.data[index]
      for(let i = index; i<this.length-1;i++){
        this.data[i] =this.data[i+1]
        console.log(i)
      }
      delete this.data[this.length-1]
      this.length--
      return theSelectedItem
  }

}


const myNewArray = new MyArray();

myNewArray.push("Riday")
myNewArray.push("Partho")
myNewArray.push("Gourab")
myNewArray.push("Raso")
myNewArray.push("Pushpok")
myNewArray.push("Dip")
myNewArray.push("Ovi")

// console.log(myNewArray.get(1))

// console.log(myNewArray)
// console.log(myNewArray.pop())
// console.log(myNewArray.shift())
console.log(myNewArray)
console.log(myNewArray.deleteByIndex(3))
console.log(myNewArray)





