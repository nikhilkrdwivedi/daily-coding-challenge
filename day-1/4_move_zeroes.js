/*
 * QUESTION LINK: https://leetcode.com/problems/move-zeroes/
 */

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var moveZeroes = function(nums) {
//     const length = nums.length;
//     const _nums = nums.filter(item=>{
//         if(item){
//             return item
//         }
//     });
//     console.log({_nums})
//     let start = (length-_nums.length);
//     for(start;start<length;start++){
//         _nums.push(0);
//     }
//     return _nums;
// };

var moveZeroes = function(nums) {
    let index = 0, count = 0;
    for(index;index<nums.length;index++){
        if(nums[index] !== 0){
            nums[count] = nums[index];
            count++;
        }
    }
    while(count<nums.length){
        nums[count++]=0;
    }
};

// Test Case 1
const nums1 = [3, 0, 3];
console.log(moveZeroes(nums1));
// Test Case 2
const nums2 = [2, 0, 1, 0, 1, 2, 0];
console.log(moveZeroes(nums2));
// Test Case 3
const nums3 = [1, 0, 4, 12, 0];
console.log(moveZeroes(nums3));