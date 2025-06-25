// function countingSort(arr) {
//   if (arr.length === 0) return [];

//   const max = Math.max(...arr);  
//   const count = new Array(max + 1).fill(0); 

   
//   for (let num of arr) {
//     count[num]++;
//   }

   
//   let index = 0;
//   for (let i = 0; i < count.length; i++) {
//     while (count[i] > 0) {
//       arr[index] = i;
//       index++;
//       count[i]--;
//     }
//   }

//   return arr;
// }





//my built 
function countingSort (arr){

    const max = Math.max(...arr)
    console.log(max)
    const countArr = new Array(max+1).fill(0)
    console.log(countArr)

    for(let num of arr){
        countArr[num]++
    }
    console.log(countArr)

    let index = 0
    for(let i = 0; i< countArr.length; i++){

        while(countArr[i]>0){
            arr[index] = i;
            countArr[i]--
            index++
        }
    }

    return arr

}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
// Output: [1, 2, 2, 3, 3, 4, 8]


