/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Length of input array 2 < nums.length <= 10 ^5
//Range of input -30 < nums[i] < 30
//answer[i] = product of all except i
//Product guaranteed to fit 32-bit int
//O(N) without division
var productExceptSelf = function (nums) {
  //Goal is to create the answer array in one pass through

  //example input 1 * 2 * 3 * 4

  //Answer Array
  //[0]:     2 * 3 * 4
  //[1]: 1     * 3 * 4
  //[2]: (1) * 2  * 4
  //[3]: (1 * 2) * 3

  //[0]:     2 * 3 * 4
  //[1]: 1     * 3 * 4
  //[2]: (1) * 2     * 4
  //[3]: (1 * 2) * 3

  const result = [];
  let productSoFar = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = productSoFar;
    productSoFar *= nums[i];
  }
  productSoFar = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= nums[j];
  }
  return result;
};
