class Solution {
  /**
  * @param number[] arr

  * @returns number
  */
  largest(arr) {
      // code here
      let large=arr[0]
      for(let i = 1;i<arr.length;i++){
          if(large<arr[i]){
              large=arr[i]
          }
      }
      return large
  }
}