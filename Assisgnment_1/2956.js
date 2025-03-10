/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let answer1 = 0;
    let answer2 = 0;

    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                answer1 ++;
                break;
            }
        }
    }

    for(let i = 0; i < nums2.length; i++) {
        for(let j = 0; j < nums1.length; j++) {
            if(nums2[i] === nums1[j]) {
                answer2 ++;
                break;
            }
        }
    }
    return [answer1, answer2];
};


// https://leetcode.com/problems/find-common-elements-between-two-arrays/submissions/1568831493/


// Time Complexity --> O(n2), due to loop iteration

// Space Complexity --> O(1), only  integer variables (answer1, answer2) used