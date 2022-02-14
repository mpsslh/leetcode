/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//look through sets, A-B1, B2-C, A-B-C -> A-C
//How to decide overlap?
//if A < B2 < B1
var merge = function (intervals) {
  if (!intervals) return intervals;
  if (intervals.length < 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  const returnArray = [];
  //loop outer array
  let min = intervals[0][0];
  let max = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (min <= intervals[i][0] && intervals[i][0] <= max) {
      max = Math.max(max, intervals[i][1]);
      min = Math.min(min, intervals[i][0]);
    } else if (intervals[i][0] <= min && min <= intervals[i][1]) {
      max = Math.max(max, intervals[i][1]);
      min = Math.min(min, intervals[i][0]);
    } else {
      returnArray.push(new Array(min, max));
      min = intervals[i][0];
      max = intervals[i][1];
    }
  }
  returnArray.push(new Array(min, max));
  return returnArray;
};
