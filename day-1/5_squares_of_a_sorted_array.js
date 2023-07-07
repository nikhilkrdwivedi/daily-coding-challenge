/*
 * QUESTION LINK: https://leetcode.com/problems/squares-of-a-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// BRUTE FORCE But works in unsorted array as well
// var sortedSquares = function(nums) {
//     console.log({nums});
//     nums.forEach((num, index)=>{
//         nums[index] = num*num;
//     });
//     nums.sort((a,b)=> a-b);
//     console.log({nums});
// };

var sortedSquares = function(nums) {
    const tempArray = new Array(nums.length)//.fill(-1);
    console.log({tempArray,nums})
    let leftPtr = 0, rightPtr = nums.length -1;
    for(let i = nums.length-1; i >=0; i--){
        if(Math.abs(nums[leftPtr]) < Math.abs(nums[rightPtr])){
            tempArray[i] = nums[rightPtr]**2;
            rightPtr--;
        }else{
            tempArray[i] = nums[leftPtr]**2;
            leftPtr++;
        }
    }
    console.log({tempArray,nums})
}

// Test Case 1
const nums1 = [-4,-1,0,3,10];
console.log(sortedSquares(nums1));
// Test Case 2
const nums2 = [-7,-3,2,3,11];
console.log(sortedSquares(nums2));
// Test Case 3
const nums3 = [0,0,0,9];
console.log(sortedSquares(nums3));