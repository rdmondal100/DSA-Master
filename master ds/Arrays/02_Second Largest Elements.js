class Solution {
  // Function returns the second largest element
  getSecondLargest(arr) {
    // Code Here
    let largest = arr[0]
    let secLarg = -1

    for (let i = 1; i < arr.length; i++) {

      if (arr[i] > largest) {
        secLarg = largest
        largest = arr[i]

      }
      if (arr[i] > secLarg && arr[i] != largest) {
        secLarg = arr[i]
      }
    }
    return secLarg
  }
}