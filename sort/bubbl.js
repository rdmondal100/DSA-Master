

const bubble = (arr)=>{
  let n = arr.length

  for(let i = 0;i<arr.length-1;i++){
    for(let j =0;j<arr.length-i-1;j++){
          if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
          }
    }
  }

  return arr
}









let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", bubble(array));