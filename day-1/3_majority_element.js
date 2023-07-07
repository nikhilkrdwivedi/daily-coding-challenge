/*
 * QUESTION LINK: https://leetcode.com/problems/majority-element/
 */

/*
 * Moore's Voting Algorithm
 * https://www.geeksforgeeks.org/majority-element/ 
 */

/*
 * @param {number[]} nums
 * @return {number}
 */

/*
 * Follow the steps below to solve the given problem:
 * Loop through each element and maintains a count of the majority element, and a majority index, maj_index
 * If the next element is the same then increment the count if the next element is not the same then decrement the count.
 * if the count reaches 0 then change the maj_index to the current element and set the count again to 1.
 * Now again traverse through the array and find the count of the majority element found.
 * If the count is greater than half the size of the array, print the element
 * Else print that there is no majority element
 */
var majorityElement = function (nums) {
    let count = 1, maj_index = 0;
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] === nums[maj_index]) {
            count++;
        }
        if (nums[index] !== nums[maj_index]) {
            if(count === 0){
                count = 1;
                maj_index = index;
            }else{
                count--;
            }
        }
    }
    count=0;
    nums.forEach(element => {
        if(element === nums[maj_index]){
            count++;
        }
    });
    console.log({maj_index,count})
    return nums[maj_index];

};

// Test Case 1
const nums1 = [3, 2, 3];
console.log(majorityElement(nums1));
// Test Case 2
const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2));
// Test Case 3
const nums3 = [1, 6, 4, 12, 1];
console.log(majorityElement(nums3));