// const countDown = (number) => {

//   if (number === 0) {
//     console.log("End it")
//     return
//   }
//   console.log(number)
//   countDown(number - 1)

// }


// countDown(100)



const factorial = (number) => {

  if (number === 0) {
    return 1
  }

  return number * factorial(number - 1)  
}


console.log(factorial(4))