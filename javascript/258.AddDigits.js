/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;

  do {
    //split
    var myArr = String(num)
      .split("")
      .map((num) => {
        return Number(num);
      });
    num = 0;
    myArr.forEach((element) => (num += element));
    //if more than 10
    //loop
  } while (num >= 10);
  return num;
};
