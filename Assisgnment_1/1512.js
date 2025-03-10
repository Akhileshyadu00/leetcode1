/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    for(let i = 0; i< nums.length; i++) {
        for(let j = i+1; j< nums.length; j++) {
            if(nums[i]=== nums[j]) {
                count += 1
            }
        }
    }
    return count;
};


// https://leetcode.com/problems/number-of-good-pairs/submissions/1568800888/
 
// Time Complexity --> O(n2), two nested loop used

// Space Complexity --> O(1), only count variable used