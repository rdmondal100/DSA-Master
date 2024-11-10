/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

  let drop=0
  for(let i = 0;i<nums.length-1;i++){
      if(nums[i]>nums[i+1]){
          drop++
      }

  }
  nums[nums.length-1] > nums[0] && drop++

  return drop<=1

  
};