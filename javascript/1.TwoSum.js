/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//o(N^2) solution
var twoSum = function (nums, target) {
  //loop twice
  let returnArray = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        returnArray.push(i);
        returnArray.push(j);
        return returnArray;
      }
    }
  }
  return returnArray;
};
