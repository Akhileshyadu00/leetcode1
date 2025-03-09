

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let Output = [];
    let max = Math.max(...candies);
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) {
            Output.push(true)
        }else {
            Output.push(false)
        }
    }
    return Output;
};


// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/1567740818/

// Time Complexity --> O(n) + O(n) = O(n) ---> till n time due to candies.length

// Space Complexity --> O(n) --> due to an Output Array



