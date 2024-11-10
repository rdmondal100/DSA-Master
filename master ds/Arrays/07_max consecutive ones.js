/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {


  let consec = 0
  let count = 0

  for (let i = 0; i <= nums.length; i++) {

    if (consec < count) {
      consec = count
    }
    if (nums[i] == 0) {
      count = 0
    }
    else {

      count++
    }

  }

  return consec

};