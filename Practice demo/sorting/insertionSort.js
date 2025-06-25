// Initial:    [5, 3, 4, 1]
// Step 1:     [3, 5, 4, 1]
// Step 2:     [3, 4, 5, 1]
// Step 3:     [1, 3, 4, 5]


// const insertionSort = (arr)=>{

//     for(let i = 1; i<arr.length; i++){
//         const current = arr[i]
//         let j = i -1


//         while(j >= 0 && arr[j]>current){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = current

//     }

//     const sum = arr[0] + arr[arr.length-1]

//     return [arr,sum]
// }




// console.log(insertionSort([5, 3, -4, 1]));

// console.log("Code run successfylly")







// Input: 
// [
//   { name: "Banana", price: 30 },
//   { name: "Apple", price: 10 },
//   { name: "Orange", price: 20 }
// ]

// Key: "price"

// Output: 
// [
//   { name: "Apple", price: 10 },
//   { name: "Orange", price: 20 },
//   { name: "Banana", price: 30 }
// ]

function sortObjectsByKey(arr, key) {
  // Your insertion sort logic
  
  for(let i = 1; i < arr.length; i++){
    const current = arr[i]
    let j = i - 1;
    console.log(arr[j][key])

    while(j >=0 && arr[j][key] > current[key]){
        arr[j+1] = arr[j]
        j--
    }

    arr[j+1] = current
  }

  return arr

}


console.log(sortObjectsByKey([
  { name: "Banana", price: 30 },
  { name: "Apple", price: 10 },
  { name: "Orange", price: 20 }
],"price"))