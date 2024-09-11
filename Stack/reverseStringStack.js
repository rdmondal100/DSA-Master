const stringReverser=(str) => {

  const stack =[]

  for(let char of str){
    stack.push(char)
  }
  let reversedString = "";

  while(stack.length){
    reversedString+=stack.pop()
  }
  return reversedString

}


console.log(stringReverser("Hello world"))