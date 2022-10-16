

// https://leetcode.com/problems/two-sum/


/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists. */

nums = [2,7,11,15], target = 9

// nums = [3,2,4], target = 6

// nums = [3,3], target = 6


var twoSum = function(nums, target) {
  
    for(i = 0; nums[i]; i++){
        for(j = 0; nums[j]; j++){
            if ( nums[i] + nums[j] == target && i != j){           
                console.log([i, j])
                return [i, j]
            }
        }
    }
};


twoSum(nums, target)
