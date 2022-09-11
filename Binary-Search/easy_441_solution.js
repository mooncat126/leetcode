/**
 * https://leetcode.com/problems/arranging-coins/
 *
 * 441. Arranging Coins
 *
 * Easy
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return binarySearch(n);
};

function binarySearch(number) {
  let line = 1;
  while (number - ((1 + line) * line) / 2 > line) {
    line += 1
  }
    return line;
}
