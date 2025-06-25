


const insertion = (arr)=>{
  let n = arr.length

  for(let i =1;i<n;i++){

    let key = arr[i]
    let prev  = i-1
    

    while(prev>=0 && arr[prev]>key){
      arr[prev+1]=arr[prev]
      prev--
    }
    arr[prev+1]=key
  }

  return arr
}





let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", insertion(array));