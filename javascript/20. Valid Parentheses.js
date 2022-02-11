/**
 * @param {string} s
 * @return {boolean}
 */

//length of string
//what can be passed in

//    Open brackets must be closed by the same type of brackets.
//    Open brackets must be closed in the correct order.
// characters '(', ')', '{', '}', '[' ']'

//Time complexity O(N), one while loop
//Space complexity O(N), one stack created
var isValid = function (s) {
  //reject if size is odd
  if (s.length % 2 === 1) {
    return false;
  }

  let stack = [];
  let i = 0;

  while (i < s.length) {
    //if left brackets, push into stack
    if (s.charAt(i) == "(" || s.charAt(i) == "{" || s.charAt(i) == "[") {
      stack.push(s.charAt(i));
    } else {
      // pop stack and compare
      let lastPushedBracket = stack.pop();

      //If there's right closing brackets but nothing in stack
      if (lastPushedBracket === undefined) {
        return false;
      }

      if (lastPushedBracket === "(" && s.charAt(i) != ")") {
        return false;
      } else if (lastPushedBracket === "{" && s.charAt(i) != "}") {
        return false;
      } else if (lastPushedBracket === "[" && s.charAt(i) != "]") {
        return false;
      }
    }
    i++;
  }

  //there is still brackets left in stack
  if (stack.length > 0) {
    return false;
  }

  return true;
};
