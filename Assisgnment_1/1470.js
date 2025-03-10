/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let output = []; 

   for (let i = 0; i < n; i++) {
       output.push(nums[i]);  
       output.push(nums[i + n]);
   }

   return output;
};


// https://leetcode.com/problems/shuffle-the-array/submissions/1568820652/

// Time Complexity --> O(n), only one iteration used

//Space Complexity --> O(n), output array used