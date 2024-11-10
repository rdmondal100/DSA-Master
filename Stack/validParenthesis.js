
const isvalidPrenthesis = (str)=>{

  let stack =[]

  let bracketsPattern ={
    "{":"}",
    "(":")",
    "[":"]"
  }

  for(let char of str){
    if(bracketsPattern[char]){
      stack.push(char)
    }else{
      let top = stack.pop()
      if(!top || bracketsPattern[top]!=char){
        return false
      }
    }
  }

  return stack.length ===0

}


console.log(isvalidPrenthesis("(){}[]"))
console.log(isvalidPrenthesis("([)]"))
console.log(isvalidPrenthesis("(["))
console.log(isvalidPrenthesis("()"))
console.log(isvalidPrenthesis(""))
