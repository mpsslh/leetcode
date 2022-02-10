/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //if value repeated return true
  const mySet1 = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (mySet1.has(nums[i])) {
      return true;
    }
    mySet1.add(nums[i]);
  }
  return false;
};
