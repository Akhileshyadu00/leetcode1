/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let result = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if((nums[i]-nums[j])== k) {
                result += 1;
            }
        }
    }
    return result;
};


// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1567749823/

// Time Complexity --> O(n2), due to outer loop and inner loop

//Space Complexity --> O(1), only have result as output, no extra space required