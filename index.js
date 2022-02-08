/**
 * @param {string} s
 * @return {number}
 */
//smaller num before larger num deducts
//bigger num after small num adds
var romanToInt = function (s) {
  const symbolToVal = new Map();
  symbolToVal.set("I", 1);
  symbolToVal.set("V", 5);
  symbolToVal.set("X", 10);
  symbolToVal.set("L", 50);
  symbolToVal.set("C", 100);
  symbolToVal.set("D", 500);
  symbolToVal.set("M", 1000);

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    //console.log("loop");
    //console.log(sum);
    //if L < R, subtract
    if (i + 1 < s.length && symbolToVal.get(s[i]) < symbolToVal.get(s[i + 1])) {
      console.log(symbolToVal.get(s[i]));
      sum -= symbolToVal.get(s[i]);
    }
    //else add
    else {
      sum += symbolToVal.get(s[i]);
    }
  }
//  console.log("end");
  //console.log(sum);
  return sum;
};

romanToInt("III");
