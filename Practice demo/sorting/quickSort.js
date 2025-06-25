

// const quickSort = (arr) =>{
//     if(arr.length <=1){
//         return arr
//     }

//     const pivot =  arr[arr.length - 1]
//     const leftArr = []
//     const rightArr = []

//     for(let i = 0; i < arr.length -1; i ++){
//         if(arr[i]<pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }


//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]

// }

// console.log(quickSort([5, 3, 8, 1, 2]));


const quickSortByKey = (arr,key) =>{

    if(arr.length <=1){
        return arr
    }

    const pivot =  arr[arr.length - 1]
    const leftArr = []
    const rightArr = []

    for(let i = 0; i < arr.length -1; i ++){
        if(arr[i][key]<pivot[key]){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }


    return [...quickSortByKey(leftArr), pivot, ...quickSortByKey(rightArr)]

}

console.log(quickSortByKey([
  { name: "Apple", rating: 4.5 },
  { name: "Banana", rating: 3.2 },
  { name: "Orange", rating: 4.8 }
],"rating"));
