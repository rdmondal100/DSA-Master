

const selection = (arr)=>{
  let n = arr.length

  for(let i=0;i<n-1;i++){
    // let min  = i
    for(let j = i+1;j<n;j++){
      if(arr[i]>arr[j]){
          
          [arr[i],arr[j]]=[arr[j],arr[i]]

      }
    }

    // [arr[i],arr[min]]=[arr[min],arr[i]]
  }


  return arr
}








let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", selection(array));