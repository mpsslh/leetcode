/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let sortedS = s.split("").sort();
  let sortedT = t.split("").sort();

  for (let i = 0; i < s.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }
  return true;
};

//Better logic

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const freqMap = {};

  for (let ch of s) {
    if (!freqMap[ch]) freqMap[ch] = 1;
    else freqMap[ch]++;
  }

  for (let ch of t) {
    if (freqMap[ch]) freqMap[ch]--;
    else return false;
  }

  return true;
};
