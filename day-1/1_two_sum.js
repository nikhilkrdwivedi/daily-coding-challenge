/**
 * QUESTION LINK: https://leetcode.com/problems/two-sum/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    if(!nums || nums?.length < 2){
        return [];
    };
    const _map = new Map();
    for(let index=0;index<nums.length;index++){
        const complement = target - nums[index];
        if(_map.has(complement)){
            return [_map.get(complement), index];
        }else{
            _map.set(nums[index], index);
        }
    }
    return []
};
// Test Case 1
const nums1 = [2,7,11,15], target1 = 9;
console.log(twoSum(nums1, target1));

const nums2 = [3,2,4], target2 = 6;
console.log(twoSum(nums2, target2));

const nums3 = [3,3], target3 = 6;
console.log(twoSum(nums3, target3));