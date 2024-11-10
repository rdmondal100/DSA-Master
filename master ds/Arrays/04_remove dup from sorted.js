/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let s=-1;
      for(let i=0;i<nums.length;i++){
          if(nums[i]==nums[i+1]){
          } 
          else{
              s++;
              nums[s]=nums[i];
          }
      }
  return s+1;
};